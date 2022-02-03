import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { Bookmark } from './book.model';
import { BoolMarkService } from './bool-mark.service';
import { createBookMarkDto } from './Dto/createBookMarkDto';
import { getBookmarkDto } from './Dto/get-bookmark.dto';

@Controller('bookmark')
export class BoolMarkController {
  constructor(private service: BoolMarkService) {}

  @Get()
 async find(@Query() getBookmarkDto:getBookmarkDto): Promise<Bookmark[]> {

    if(Object.keys(getBookmarkDto).length){
      const find = await this.service.find(getBookmarkDto)
      return find
    }
  const findAll = await this.service.findAll()
    return findAll;
  }

  @Get('/:id')
 async findById(@Param('id') id:string):Promise<Bookmark>{
    // return this.service.findByID(id)

    const findByID = await this.service.findByID(id);

    return findByID;

  }

  @Post()
 async creatBook(@Res()res,@Body() createBookMarkDto: createBookMarkDto):Promise<Bookmark> {

    const createBooks = await this.service.createBook(createBookMarkDto);

    return res.status(HttpStatus.OK).json({
      meassage:"Bookmark has been created successfully",
      createBooks
    })

    // return this.service.createBook(createBookMarkDto);
  }

  @Delete('/:id')
 async deleteBookmark(@Param('id') id:string):Promise<void>{
   const deleteBookmark = await this.service.deleteBookmark(id);
    return deleteBookmark;
  }

  @Patch('/:id/description')
 async updateBookmarkDescription(@Param('id') id:string , @Body('description') createBookMarkDto:createBookMarkDto):Promise<Bookmark>{
    const updateBookmarkDescription = await this.service.updateBookmarkDescription(id,createBookMarkDto)
    return updateBookmarkDescription;
  }

}
