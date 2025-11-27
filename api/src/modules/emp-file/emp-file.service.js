"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpFileService = void 0;
const common_1 = require("@nestjs/common");
let EmpFileService = class EmpFileService {
    create(createEmpFileDto) {
        return 'This action adds a new empFile';
    }
    findAll() {
        return `This action returns all empFile`;
    }
    findOne(id) {
        return `This action returns a #${id} empFile`;
    }
    update(id, updateEmpFileDto) {
        return `This action updates a #${id} empFile`;
    }
    remove(id) {
        return `This action removes a #${id} empFile`;
    }
};
exports.EmpFileService = EmpFileService;
exports.EmpFileService = EmpFileService = __decorate([
    (0, common_1.Injectable)()
], EmpFileService);
