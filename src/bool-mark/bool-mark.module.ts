import { Bookmark } from './book.model';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoolMarkController } from './bool-mark.controller';
import { BoolMarkService } from './bool-mark.service';
import { Book, bookMarkSechma } from './schema/book.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Book.name ,schema:bookMarkSechma}])
  ],
  controllers: [BoolMarkController],
  providers: [BoolMarkService]
})
export class BoolMarkModule {}
