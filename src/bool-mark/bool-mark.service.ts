import { v4 as uuid } from 'uuid';
import * as _ from "lodash";
import { getBookmarkDto } from './Dto/get-bookmark.dto';
import { Bookmark } from './book.model';
import { InjectModel } from '@nestjs/mongoose';
import { Book, bookMarkDocument } from './schema/book.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { createBookMarkDto } from './Dto/createBookMarkDto';

@Injectable()
export class BoolMarkService {

  constructor(@InjectModel(Book.name) private bookModule:Model<bookMarkDocument>){}

  // private bookmark: Bookmark[] = [];

  async findAll(): Promise<Bookmark[]> {
    const findAlls = await this.bookModule.find().exec();
    return findAlls;
  }
async find(getBookmarkDto:getBookmarkDto):Promise<Bookmark[]> {
  let bookmark = await this.findAll();
  const {url,description} = getBookmarkDto;

  if(url){
    // this.bookModule = bookmark.filter((book) =>bookmark.url.toLowerCase().includes(url))
    this.bookModule.findById(url).exec()
  }
  if(description){
    // bookmark = bookmark.filter((bookmark) =>bookmark.description.toLowerCase().includes(description));
    this.bookModule.findById(description).exec()
  }

  return bookmark
}

 async findByID(id:string):Promise<Bookmark>{
    // return  _.find(this.bookmark,(bookmark) =>{
    //   return bookmark.id === id
    // })
    const findById = await this.bookModule.findById(id).exec();
    return findById
  }
  

  async createBook(createBookMarkDto): Promise<Bookmark> {
    const { url, description } = createBookMarkDto;
    // const bookmarks: Bookmark = {
    //   id: uuid(),
    //   url,
    //   description
    
    // };

    // this.bookmark.push(bookmarks);

const bookMarkCreate = await new this.bookModule(createBookMarkDto)

    return bookMarkCreate.save()
  }

 async  deleteBookmark(id:string):Promise<any>{
  // this.Bookmark= _.remove(this.Bookmark,(Bookmark) =>{
  //    return Bookmark.id !== id;
  //  })

  let deleteBookmark = await this.bookModule.findByIdAndRemove(id);

  return deleteBookmark;

  }
  // this.bookmark = this.bookmark.filter((bookmark) =>bookmark.id !== id)


 async updateBookmarkDescription(id:string , createBookMarkDto:createBookMarkDto ):Promise<Bookmark>{
    // const Bookmark = await this.findByID(id);
    //  description = description

    // return Bookmark;
    const updateBookmarkDescriptions = await this.bookModule.findByIdAndUpdate(id , createBookMarkDto ,{ new: true })

    return updateBookmarkDescriptions;

  }


   
  
}


