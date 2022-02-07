import { url } from 'inspector';
import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoolMarkModule } from './bool-mark/book-mark.module';




@Module({
  imports: [

    MongooseModule.forRoot('mongodb://localhost/Bookmark', { useNewUrlParser: true }),


    BoolMarkModule,
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
