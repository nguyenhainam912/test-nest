import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Repos, ReposSchema } from './schemas/repos.schema';
import { CategoriesController } from './repos.controller';
import { ReposService } from './repos.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Repos.name, schema: ReposSchema }]),
  ],
  controllers: [CategoriesController],
  providers: [ReposService],
  exports: [ReposService],
})
export class ReposModule {}
