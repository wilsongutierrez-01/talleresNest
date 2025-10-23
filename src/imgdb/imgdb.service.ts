import { Injectable } from '@nestjs/common';
import { CreateImgdbDto } from './dto/create-imgdb.dto';
import { UpdateImgdbDto } from './dto/update-imgdb.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Image, ImageDocument } from './schemas/image.schema';

@Injectable()
export class ImgdbService {
    constructor(
    @InjectModel(Image.name) private readonly imageModel: Model<Image>,
  ) {}
  async createImage(image: Image): Promise<ImageDocument> {
    const newImage = new this.imageModel(image);
    await newImage.save();
    return newImage;
  }

  findAll() {
    return this.imageModel.find().exec();
  }

  findOne(id: number) {
    return this.imageModel.findById(id).exec()  ;
  }

  update(id: number, updateImgdbDto: UpdateImgdbDto) {
    return this.imageModel.findByIdAndUpdate(id, updateImgdbDto).exec();
  }

  remove(id: number) {
    return this.imageModel.findByIdAndDelete(id).exec();
  }
}
