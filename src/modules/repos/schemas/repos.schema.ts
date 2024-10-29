import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ReposDocument = HydratedDocument<Repos>;

@Schema()
export class Repos {
  @Prop({ required: true })
  name: string;

  @Prop({})
  description: string;

  @Prop()
  language: string;

  @Prop({ required: true })
  fork: string;

  @Prop({ required: true })
  forks: Number;

  @Prop({})
  forks_count: Number;

  @Prop({ required: true })
  created_at: Date;
}

export const ReposSchema = SchemaFactory.createForClass(Repos);
