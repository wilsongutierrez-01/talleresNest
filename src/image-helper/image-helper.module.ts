import { Module } from '@nestjs/common';
import { ImageHelperService } from './image-helper.service';
import { DmsModule } from 'src/dms/dms.module';
import { ImgdbModule } from 'src/imgdb/imgdb.module';

@Module({
  imports: [
    DmsModule,
    ImgdbModule,
  ],
  providers: [ImageHelperService],
  exports: [ImageHelperService],
})
export class ImageHelperModule {}
