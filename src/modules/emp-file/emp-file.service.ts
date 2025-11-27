import { Injectable } from '@nestjs/common';
import { CreateEmpFileDto } from './dto/create-emp-file.dto';
import { UpdateEmpFileDto } from './dto/update-emp-file.dto';

@Injectable()
export class EmpFileService {
  create(createEmpFileDto: CreateEmpFileDto) {
    return 'This action adds a new empFile';
  }

  findAll() {
    return `This action returns all empFile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empFile`;
  }

  update(id: number, updateEmpFileDto: UpdateEmpFileDto) {
    return `This action updates a #${id} empFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} empFile`;
  }
}
