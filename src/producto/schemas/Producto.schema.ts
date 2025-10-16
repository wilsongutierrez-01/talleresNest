import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Producto {
  @Prop({ required: true })
  Nombre: string;

  @Prop({ required: false })
  Imagen: string;

  @Prop({ required: true })
  Precio: number;

  @Prop({ required: false })
  Descripcion: string;

  @Prop({ required: false })
  Valoracion: number;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);