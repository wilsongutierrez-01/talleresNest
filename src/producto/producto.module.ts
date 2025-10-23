import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { Producto, ProductoSchema } from './schemas/Producto.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageHelperModule } from 'src/image-helper/image-helper.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Producto.name, schema: ProductoSchema },
    ]),
    ImageHelperModule,
  ],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
