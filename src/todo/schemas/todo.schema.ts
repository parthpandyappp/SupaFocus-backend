import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  todo: string;

  @Prop({ required: true })
  isCompleted?: boolean;

  @Prop()
  createdBy: string;

  @Prop({ required: true })
  createdAt: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
