import { OmitType } from '@nestjs/mapped-types';
import { CreateReposDto } from './create-repos.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateReposDto extends OmitType(CreateReposDto, [] as const) {
  @IsNotEmpty({ message: 'id khong duoc de trong' })
  _id: string;
}
