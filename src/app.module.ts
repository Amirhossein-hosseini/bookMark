import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoolMarkModule } from './bool-mark/bool-mark.module';

@Module({
  imports: [
    BoolMarkModule,
  MongooseModule.forRoot('mongodb://localhost/nest', { useNewUrlParser: true })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
