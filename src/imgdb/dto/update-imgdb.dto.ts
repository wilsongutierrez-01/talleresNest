import { PartialType } from '@nestjs/mapped-types';
import { CreateImgdbDto } from './create-imgdb.dto';

export class UpdateImgdbDto extends PartialType(CreateImgdbDto) {}
