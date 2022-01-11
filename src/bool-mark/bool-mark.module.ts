import { Module } from '@nestjs/common';
import { BoolMarkController } from './bool-mark.controller';
import { BoolMarkService } from './bool-mark.service';

@Module({
  controllers: [BoolMarkController],
  providers: [BoolMarkService]
})
export class BoolMarkModule {}
