import { Test, TestingModule } from '@nestjs/testing';
import { BoolMarkController } from './bool-mark.controller';

describe('BoolMarkController', () => {
  let controller: BoolMarkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoolMarkController],
    }).compile();

    controller = module.get<BoolMarkController>(BoolMarkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
