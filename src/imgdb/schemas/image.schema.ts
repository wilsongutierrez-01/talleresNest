import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ImageDocument = HydratedDocument<Image>;
@Schema({
  timestamps: true,
})
export class Image {
  @Prop({ required: true, trim: true })
  _id: string;

  @Prop({ required: true, trim: true })
  url: string;
  @Prop({ required: true, trim: true })
  isPublic: boolean;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
