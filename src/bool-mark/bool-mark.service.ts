import { v4 as uuid } from 'uuid';
import * as _ from "lodash";
import { getBookmarkDto } from './Dto/get-bookmark.dto';
import { Bookmark } from './book.model';
import { InjectModel } from '@nestjs/mongoose';
import { Book, bookMarkDocument } from './schema/book.schema';
import { Model } from 'mongoose';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { createBookMarkDto } from './Dto/createBookMarkDto';

@Injectable()
export class BoolMarkService {

  constructor(@InjectModel(Book.name) private bookModule:Model<bookMarkDocument>){}


  async findAll(): Promise<Bookmark[]> {

    const findAll = await this.bookModule.find().exec()
  
    return findAll
  }
async find(getBookmarkDto:getBookmarkDto):Promise<Bookmark[]> {
  let bookmark = await this.findAll();
  const {url,description} = getBookmarkDto;

  if(url){
    this.bookModule.find({url}).exec()
  }
  if(description){
    this.bookModule.find({description}).exec()
  }

  return bookmark;
}

 async findByID(id:string):Promise<Bookmark>{
  
    return await this.bookModule.findById(id).exec()
  }
  

  async createBook(createBookMarkDto): Promise<Bookmark> {
    const { url, description } = createBookMarkDto;
    const bookmarks: Bookmark = {
      id: uuid(),
      url,
      description
    
    };


const bookMarkCreate = await  this.bookModule.create(createBookMarkDto)

    return bookMarkCreate.save()
  }

 async  deleteBookmark(id:string):Promise<getBookmarkDto>{
 


  return await this.bookModule.findByIdAndDelete(id).exec()

 
  }


 async updateBookmarkDescription(id:string , createBookMarkDto:createBookMarkDto ):Promise<Bookmark>{
    

    return await this.bookModule.findByIdAndUpdate(id,createBookMarkDto,{new:true}).exec();

  }


   
  
}


