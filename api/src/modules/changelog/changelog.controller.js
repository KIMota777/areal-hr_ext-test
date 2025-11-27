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
exports.ChangelogController = void 0;
const common_1 = require("@nestjs/common");
const changelog_service_1 = require("./changelog.service");
const create_changelog_dto_1 = require("./dto/create-changelog.dto");
const update_changelog_dto_1 = require("./dto/update-changelog.dto");
let ChangelogController = class ChangelogController {
    constructor(changelogService) {
        this.changelogService = changelogService;
    }
    create(createChangelogDto) {
        return this.changelogService.create(createChangelogDto);
    }
    findAll() {
        return this.changelogService.findAll();
    }
    findOne(id) {
        return this.changelogService.findOne(+id);
    }
    update(id, updateChangelogDto) {
        return this.changelogService.update(+id, updateChangelogDto);
    }
    remove(id) {
        return this.changelogService.remove(+id);
    }
};
exports.ChangelogController = ChangelogController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_changelog_dto_1.CreateChangelogDto]),
    __metadata("design:returntype", void 0)
], ChangelogController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ChangelogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChangelogController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_changelog_dto_1.UpdateChangelogDto]),
    __metadata("design:returntype", void 0)
], ChangelogController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ChangelogController.prototype, "remove", null);
exports.ChangelogController = ChangelogController = __decorate([
    (0, common_1.Controller)('changelog'),
    __metadata("design:paramtypes", [changelog_service_1.ChangelogService])
], ChangelogController);
