import { Injectable } from '@nestjs/common';
import  pool  from '../../connect';


export interface Organization {
    id: number;
    name: string;
    comment?: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
}


export interface CreateOrganizationDto {
    name: string;
    comment?: string;
}


export interface UpdateOrganizationDto {
    name?: string;
    comment?: string;
}

@Injectable()
export class OrganizationService {

    async create(name: string, comment?: string): Promise<Organization> {
        const client = await pool.connect();
        try {
            const res = await client.query(
                'INSERT INTO organizations (name, comment) VALUES ($1, $2) RETURNING *',
                [name, comment]
            );
            return res.rows[0];
        } finally {
            client.release();
        }
    }

    async findAll(): Promise<Organization[]> {
        const client = await pool.connect();
        try {
            const res = await client.query(
                'SELECT * FROM organizations WHERE deleted_at IS NULL ORDER BY id'
            );
            return res.rows;
        } finally {
            client.release();
        }
    }

    async findOne(id: number): Promise<Organization | null> {
        const client = await pool.connect();
        try {
            const res = await client.query(
                'SELECT * FROM organizations WHERE id = $1 AND deleted_at IS NULL',
                [id]
            );
            return res.rows[0] || null;
        } finally {
            client.release();
        }
    }

    async update(id: number, name?: string, comment?: string): Promise<Organization | null> {
        const client = await pool.connect();
        try {
            const res = await client.query(
                `UPDATE organizations
                 SET name = COALESCE($2, name),
                     comment = COALESCE($3, comment),
                     updated_at = NOW()
                 WHERE id = $1 AND deleted_at IS NULL
                 RETURNING *`,
                [id, name, comment]
            );
            return res.rows[0] || null;
        } finally {
            client.release();
        }
    }

    async remove(id: number): Promise<Organization | null> {
        const client = await pool.connect();
        try {
            const res = await client.query(
                `UPDATE organizations
                 SET deleted_at = NOW()
                 WHERE id = $1 AND deleted_at IS NULL
                 RETURNING *`,
                [id]
            );
            return res.rows[0] || null;
        } finally {
            client.release();
        }
    }
}