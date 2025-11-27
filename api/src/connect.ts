import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    host: process.env.DATABASE_HOST || 'db',
    port: Number(process.env.DATABASE_PORT) || 5432,
    user: process.env.DATABASE_USER || 'user',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: process.env.DATABASE_NAME || 'areal_hr',
});

export async function query(text: string, params?: any[]) {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('executed query', { text, duration, rows: res.rowCount });
    return res;
}
