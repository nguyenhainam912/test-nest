import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CreateReposDto } from './dto/create-repos.dto';
import { UpdateReposDto } from './dto/update-repos.dto';
import { ReposService } from './repos.service';
import { ResponseMessage } from 'src/decorator/customize';

@Controller('repos')
export class CategoriesController {
  constructor(private readonly reposService: ReposService) {}

  @Post()
  @ResponseMessage('Create a repos')
  create() {
    return this.reposService.create();
  }

  @Get()
  @ResponseMessage('get a repos')
  get(@Query() qs: string) {
    return this.reposService.get(qs);
  }
}
