import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Bookmark } from './book.model';
import { BoolMarkService } from './bool-mark.service';
import { createBookMarkDto } from './Dto/createBookMarkDto';
import { getBookmarkDto } from './Dto/get-bookmark.dto';

@Controller('bookmark')
export class BoolMarkController {
  constructor(private service: BoolMarkService) {}

  @Get()
  find(@Query() getBookmarkDto:getBookmarkDto): Bookmark[] {

    if(Object.keys(getBookmarkDto).length){
      return this.service.find(getBookmarkDto);
    }
  
    return this.service.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id:string):Bookmark{
    return this.service.findByID(id)
  }

  @Post()
  creatBook(@Body() createBookMarkDto: createBookMarkDto): Bookmark {
    return this.service.createBook(createBookMarkDto);
  }

  @Delete('/:id')
  deleteBookmark(@Param('id') id:string):void{
    return this.service.deleteBookmark(id)
  }

  @Patch('/:id/description')
  updateBookmarkDescription(@Param('id') id:string , @Body('description') description:string):Bookmark{
    return this.service.updateBookmarkDescription(id,description)
  }

}
