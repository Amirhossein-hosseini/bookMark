import { url } from 'inspector';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import * as _ from "lodash";
import { getBookmarkDto } from './Dto/get-bookmark.dto';
import { Bookmark } from './book.model';

@Injectable()
export class BoolMarkService {
  private bookmark: Bookmark[] = [];

  findAll(): Bookmark[] {
    return this.bookmark;
  }
find(getBookmarkDto:getBookmarkDto):Bookmark[] {
  let bookmark = this.findAll();
  const {url,description} = getBookmarkDto;

  if(url){
    bookmark = bookmark.filter((bookmark) =>bookmark.url.toLowerCase().includes(url))
  }
  if(description){
    bookmark = bookmark.filter((bookmark) =>bookmark.description.toLowerCase().includes(description));
  }

  return bookmark
}

  findByID(id:string):Bookmark{
    return  _.find(this.bookmark,(bookmark) =>{
      return bookmark.id === id
    })
  }
  

  createBook(createBookMarkDto): Bookmark {
    const { url, description } = createBookMarkDto;
    const bookmarks: Bookmark = {
      id: uuid(),
      url,
      description
    
    };

    this.bookmark.push(bookmarks);

    return bookmarks;
  }

  deleteBookmark(id:string):void{
  this.bookmark= _.remove(this.bookmark,(Bookmark) =>{
     return Bookmark.id !== id;
   })
  }
  // this.bookmark = this.bookmark.filter((bookmark) =>bookmark.id !== id)


  updateBookmarkDescription(id:string , description:string ):Bookmark{
    const Bookmark = this.findByID(id);
    Bookmark.description = description

    return Bookmark;

  }


   
  
}
