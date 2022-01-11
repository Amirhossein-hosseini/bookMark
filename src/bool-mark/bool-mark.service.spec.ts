import { Test, TestingModule } from '@nestjs/testing';
import { BoolMarkService } from './bool-mark.service';

describe('BoolMarkService', () => {
  let service: BoolMarkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BoolMarkService],
    }).compile();

    service = module.get<BoolMarkService>(BoolMarkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
