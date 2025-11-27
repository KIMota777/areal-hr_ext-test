import { Module } from '@nestjs/common';
import { EmpFileService } from './emp-file.service';
import { EmpFileController } from './emp-file.controller';

@Module({
  controllers: [EmpFileController],
  providers: [EmpFileService],
})
export class EmpFileModule {}
