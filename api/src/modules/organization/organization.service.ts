import { Injectable } from '@nestjs/common';
import { query } from '../../connect';

@Injectable()
export class OrganizationService {
    async create(name: string, comment?: string) {
        const res = await query(
            'INSERT INTO organizations (name, comment) VALUES ($1, $2) RETURNING *',
            [name, comment]
        );
        return res.rows[0];
    }

    async findAll() {
        const res = await query('SELECT * FROM organizations WHERE deleted_at IS NULL');
        return res.rows;
    }

    async update(id: number, name?: string, comment?: string) {
        const res = await query(
            `UPDATE organizations
       SET name = COALESCE($2, name),
           comment = COALESCE($3, comment),
           updated_at = NOW()
       WHERE id = $1 AND deleted_at IS NULL
       RETURNING *`,
            [id, name, comment]
        );
        return res.rows[0];
    }

    async remove(id: number) {
        const res = await query(
            `UPDATE organizations SET deleted_at = NOW() WHERE id = $1 RETURNING *`,
            [id]
        );
        return res.rows[0];
    }
}
