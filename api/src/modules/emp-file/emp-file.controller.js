"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpFileController = void 0;
const common_1 = require("@nestjs/common");
const emp_file_service_1 = require("./emp-file.service");
const create_emp_file_dto_1 = require("./dto/create-emp-file.dto");
const update_emp_file_dto_1 = require("./dto/update-emp-file.dto");
let EmpFileController = class EmpFileController {
    constructor(empFileService) {
        this.empFileService = empFileService;
    }
    create(createEmpFileDto) {
        return this.empFileService.create(createEmpFileDto);
    }
    findAll() {
        return this.empFileService.findAll();
    }
    findOne(id) {
        return this.empFileService.findOne(+id);
    }
    update(id, updateEmpFileDto) {
        return this.empFileService.update(+id, updateEmpFileDto);
    }
    remove(id) {
        return this.empFileService.remove(+id);
    }
};
exports.EmpFileController = EmpFileController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_emp_file_dto_1.CreateEmpFileDto]),
    __metadata("design:returntype", void 0)
], EmpFileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmpFileController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmpFileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_emp_file_dto_1.UpdateEmpFileDto]),
    __metadata("design:returntype", void 0)
], EmpFileController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmpFileController.prototype, "remove", null);
exports.EmpFileController = EmpFileController = __decorate([
    (0, common_1.Controller)('emp-file'),
    __metadata("design:paramtypes", [emp_file_service_1.EmpFileService])
], EmpFileController);
