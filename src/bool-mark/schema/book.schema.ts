import { url } from 'inspector';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Mongoose } from 'mongoose';

export type bookMarkDocument = Book & Document

@Schema()
export class Book{
@Prop()
url:string

@Prop()
description:string

@Prop()
id:string

}

export const bookMarkSechma = SchemaFactory.createForClass(Book)