import { Pool } from 'pg';

const pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'user',
    password: '888888',
    database: 'test_db',
});


export { pool };


export default pool;