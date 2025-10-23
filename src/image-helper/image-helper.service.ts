import { ConflictException, Injectable } from '@nestjs/common';
import { DmsService } from 'src/dms/dms.service';
import { ImageType } from 'src/imgdb/dto/image.dt';
import { ImgdbService } from 'src/imgdb/imgdb.service';
import { Image, ImageDocument } from 'src/imgdb/schemas/image.schema';

@Injectable()
export class ImageHelperService {
  constructor(
    private readonly dmsService: DmsService,
    private readonly imageService: ImgdbService,
  ) { }
  
  async getImage(image: Express.Multer.File): Promise<ImageDocument> {
    const imageInfo: ImageType = await this.dmsService.uploadSingleFile({
      file: image,
      isPublic: false,
    });
  
    const imageDB = {
      _id: imageInfo.key,
      url: imageInfo.url,
      isPublic: imageInfo.isPublic,
    };
  
    const newImage = await this.imageService.createImage(imageDB);
  
    return newImage;
  }
    
  async putImage(
    image: Express.Multer.File,
    id: string,
  ): Promise<ImageDocument> {
    const deleteImage = await this.dmsService.deleteFile(id);
    if (!deleteImage) throw new ConflictException('Imagen no encontrada');
  
    const imageInfo: ImageType = await this.dmsService.uploadSingleFile({
      file: image,
      isPublic: false,
    });
  
    const imageDB = {
      _id: imageInfo.key,
      url: imageInfo.url,
      isPublic: imageInfo.isPublic,
    };
  
    const newImage = await this.imageService.createImage(imageDB);
  
    return newImage;
  }
    
  async getPresignedImageUrl(image: ImageDocument | Image) {
      const result = await this.dmsService.getPresignedUrl(image._id);
      if (!result || !result.url) {
        throw new ConflictException('Error al obtener la URL de la imagen');
      }
  
      return {
        _id: image._id,
        isPublic: true,
        url: result.url,
      };
      }
    
    async mapPresignedUrls(images: ImageDocument[]) {
      const updatedImages = [];
      for (const image of images) {
        const updated = await this.getPresignedImageUrl(image);
        updatedImages.push(updated);
      }
      return updatedImages;
    }
 }

