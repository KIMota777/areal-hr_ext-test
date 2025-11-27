"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrganizationSchema = void 0;
const joi_1 = require("joi");
exports.createOrganizationSchema = joi_1.default.object({
    name: joi_1.default.string().max(255).required(),
    comment: joi_1.default.string().optional().allow('', null)
});
