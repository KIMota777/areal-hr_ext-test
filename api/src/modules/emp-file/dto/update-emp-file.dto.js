"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmpFileDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_emp_file_dto_1 = require("./create-emp-file.dto");
class UpdateEmpFileDto extends (0, mapped_types_1.PartialType)(create_emp_file_dto_1.CreateEmpFileDto) {
}
exports.UpdateEmpFileDto = UpdateEmpFileDto;
