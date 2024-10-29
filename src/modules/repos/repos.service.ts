import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Repos as ReposM, ReposDocument } from './schemas/repos.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import aqp from 'api-query-params';
import { CreateReposDto } from './dto/create-repos.dto';
import { UpdateReposDto } from './dto/update-repos.dto';

@Injectable()
export class ReposService {
  constructor(
    @InjectModel(ReposM.name)
    private reposModel: SoftDeleteModel<ReposDocument>,
  ) {}

  async fetchData() {
    const url = 'https://api.github.com/users/freeCodeCamp/repos';
    const response = await fetch(url);
    let data = await response.json();
    data = data.filter((item) => item.fork == false && item.forks > 5);
    return data;
  }

  async create() {
    const data = await this.fetchData();
    const createPromises = data.map(async (item) => {
      return await this.reposModel.create({
        name: item.name,
        description: item.description,
        language: item.language ?? '',
        fork: item.fork,
        forks: item.forks,
        forks_count: item.forks_count,
        created_at: item.created_at,
      });
    });

    await Promise.all(createPromises);
  }

  async get(qs: string) {
    const { filter } = aqp(qs);
    const data = await this.reposModel.find(filter).sort({ created_at: 1 });
    return JSON.stringify(data);
  }
}
