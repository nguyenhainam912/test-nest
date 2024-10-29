import { IsNotEmpty } from 'class-validator';

export class CreateReposDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  language: string;

  @IsNotEmpty()
  fork: string;

  @IsNotEmpty()
  forks: string;

  @IsNotEmpty()
  forks_count: string;

  @IsNotEmpty()
  created_at: Date;
}
