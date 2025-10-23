import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ImgdbModule } from './imgdb/imgdb.module';
import { DmsModule } from './dms/dms.module';
import { ImageHelperService } from './image-helper/image-helper.service';
import { ImageHelperModule } from './image-helper/image-helper.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    ProductoModule,
    ImgdbModule,
    DmsModule,
    ImageHelperModule],
  controllers: [AppController],
  providers: [AppService, ImageHelperService,],
})
export class AppModule {}
