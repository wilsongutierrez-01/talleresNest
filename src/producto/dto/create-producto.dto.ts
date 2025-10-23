import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateProductoDto {
  @IsNotEmpty()
  Nombre: string;

  @IsOptional()
  Imagen: string;

  @IsNotEmpty()
  Precio: number;

  @IsOptional()
  Descripcion: string;

  @IsOptional()
  Valoracion: number;
}
