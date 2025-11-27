"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrganizationSchema = void 0;
const joi_1 = require("joi");
exports.updateOrganizationSchema = joi_1.default.object({
    name: joi_1.default.string().max(255).optional(),
    comment: joi_1.default.string().optional().allow('', null)
});
