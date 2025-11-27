import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpFileDto } from './create-emp-file.dto';

export class UpdateEmpFileDto extends PartialType(CreateEmpFileDto) {}
