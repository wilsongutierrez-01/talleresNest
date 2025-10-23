import { Module } from '@nestjs/common';
import { ImgdbService } from './imgdb.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageSchema, Image } from './schemas/image.schema';

@Module({
    imports: [
    MongooseModule.forFeature([
      {
        name: Image.name,
        schema: ImageSchema,
      },
    ]),
  ],
  controllers: [],
  providers: [ImgdbService],
  exports: [ImgdbService],
})
export class ImgdbModule {}
