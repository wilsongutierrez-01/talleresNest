import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Image } from 'src/imgdb/schemas/image.schema';

@Schema({
  timestamps: true,
})
export class Producto {
  @Prop({ required: true })
  Nombre: string;

  @Prop({ required: true, ref: 'Image', type: String })
  Imagen: Image;

  @Prop({ required: true })
  Precio: number;

  @Prop({ required: false })
  Descripcion: string;

  @Prop({ required: false })
  Valoracion: number;

  @Prop({ required: true })
  stock: number;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);