"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationService = void 0;
const common_1 = require("@nestjs/common");
const connect_1 = require("../../connect");
let OrganizationService = class OrganizationService {
    async create(name, comment) {
        const res = await connect_1.pool.query('INSERT INTO organizations (name, comment) VALUES ($1, $2) RETURNING *', [name, comment]);
        return res.rows[0];
    }
    async findAll() {
        const res = await connect_1.pool.query('SELECT * FROM organizations WHERE deleted_at IS NULL');
        return res.rows;
    }
    async update(id, name, comment) {
        const res = await connect_1.pool.query(`UPDATE organizations
             SET name = COALESCE($2, name),comment = COALESCE($3, comment),updated_at = NOW()
             WHERE id = $1 AND deleted_at IS NULL
                 RETURNING *`, [id, name, comment]);
        return res.rows[0];
    }
    async remove(id) {
        const res = await connect_1.pool.query(`UPDATE organizations
             SET deleted_at = NOW()
             WHERE id = $1
                 RETURNING *`, [id]);
        return res.rows[0];
    }
};
exports.OrganizationService = OrganizationService;
exports.OrganizationService = OrganizationService = __decorate([
    (0, common_1.Injectable)()
], OrganizationService);
