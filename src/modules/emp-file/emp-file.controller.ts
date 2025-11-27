import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpFileService } from './emp-file.service';
import { CreateEmpFileDto } from './dto/create-emp-file.dto';
import { UpdateEmpFileDto } from './dto/update-emp-file.dto';

@Controller('emp-file')
export class EmpFileController {
  constructor(private readonly empFileService: EmpFileService) {}

  @Post()
  create(@Body() createEmpFileDto: CreateEmpFileDto) {
    return this.empFileService.create(createEmpFileDto);
  }

  @Get()
  findAll() {
    return this.empFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empFileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpFileDto: UpdateEmpFileDto) {
    return this.empFileService.update(+id, updateEmpFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empFileService.remove(+id);
  }
}
