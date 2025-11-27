"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
const { Pool } = pg_1.default;
exports.pool = new Pool({
    host: 'db',
    port: 5432,
    user: 'user',
    password: '888888',
    database: 'test_db',
});
