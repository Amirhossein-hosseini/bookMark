import { Body, Controller, Delete, Get, Header, HttpCode, HttpException, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { result } from 'lodash';
import { Bookmark } from './book.model';
import { BookMarkService } from './book-mark.service';
import { createBookMarkDto } from './Dto/createBookMarkDto';
import { getBookmarkDto } from './Dto/get-bookmark.dto';

@Controller('bookmark')
export class BoolMarkController {
  constructor(private service: BookMarkService) {}

  @Get()
 async find(@Query() getBookmarkDto:getBookmarkDto): Promise<Bookmark[]> {

 

    if(Object.keys(getBookmarkDto).length){
      return await this.service.find(getBookmarkDto)
    }
    return await this.service.findAll()




  }
  @Get('/:id')
  @Header('custome-header-name','this is custome header')

 async findById(@Param('id') id:string):Promise<Bookmark>{
   

    return await this.service.findByID(id)

  }

  @Post()
  @Header('custome-header-name','this is custome header')

 async creatBook(@Res()res,@Body() createBookMarkDto: createBookMarkDto):Promise<Bookmark> {

    const createBooks = await this.service.createBook(createBookMarkDto);

    return res.status(HttpStatus.OK).json({
      message:"Post has been created successfull",
      createBooks
    })

  }

  @Delete('/:id')
 async deleteBookmark(@Res() res, @Param('id') id:string):Promise<void>{

    const deleteBookmark = await this.service.deleteBookmark(id);
    return res.status(HttpStatus.OK).json({
      message:"Bookmark has brrn deleted successfully",
      deleteBookmark

    })


 
  }

  @Patch('/:id')
 async updateBookmark(@Res()res,@Param('id') id:string , @Body() createBookMarkDto:createBookMarkDto):Promise<Bookmark>{
     const updateBookmark = await this.service.updateBookmark(id,createBookMarkDto)
    // return updateBookmarkDescription;

    // return await this.service.updateBookmarkDescription(id,createBookMarkDto)

    return res.status(HttpStatus.OK).json({
     message:"sucessfull for updateBookmark",
     updateBookmark
    })
  }

}
