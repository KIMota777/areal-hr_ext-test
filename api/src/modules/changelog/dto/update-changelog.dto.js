"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChangelogDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_changelog_dto_1 = require("./create-changelog.dto");
class UpdateChangelogDto extends (0, mapped_types_1.PartialType)(create_changelog_dto_1.CreateChangelogDto) {
}
exports.UpdateChangelogDto = UpdateChangelogDto;
