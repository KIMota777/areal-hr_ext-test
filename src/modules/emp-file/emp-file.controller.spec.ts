import { Test, TestingModule } from '@nestjs/testing';
import { EmpFileController } from './emp-file.controller';
import { EmpFileService } from './emp-file.service';

describe('EmpFileController', () => {
  let controller: EmpFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpFileController],
      providers: [EmpFileService],
    }).compile();

    controller = module.get<EmpFileController>(EmpFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
