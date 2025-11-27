import { Test, TestingModule } from '@nestjs/testing';
import { EmpFileService } from './emp-file.service';

describe('EmpFileService', () => {
  let service: EmpFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpFileService],
    }).compile();

    service = module.get<EmpFileService>(EmpFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
