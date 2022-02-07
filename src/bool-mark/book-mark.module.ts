import { Bookmark } from './book.model';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoolMarkController } from './bool-mark.controller';
import { BookMarkService } from './book-mark.service';
import { Book, bookMarkSechma } from './schema/book.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Book.name ,schema:bookMarkSechma}])
  ],
  controllers: [BoolMarkController],
  providers: [BookMarkService]
})
export class BoolMarkModule {}
