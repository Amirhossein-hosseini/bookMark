import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoolMarkModule } from './bool-mark/bool-mark.module';

@Module({
  imports: [BoolMarkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
