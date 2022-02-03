import { IsNotEmpty, IsString, MaxLength } from "class-validator";



export class createBookMark{
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    id:string

    @IsString()
    @MaxLength(10)
    @IsNotEmpty()
    url:string

     @IsString()
     @MaxLength(30)
     @IsNotEmpty()
   description:string
}