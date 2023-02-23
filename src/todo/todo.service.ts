import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './schemas/todo.schema';
import { TodoDto } from './dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly model: Model<TodoDocument>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.model.find().exec();
  }

  async getTodoByUserId(id: string): Promise<any> {
    return await this.model.find({ createdBy: id }).exec();
  }

  async deleteAll(): Promise<any> {
    return await this.model.deleteMany().exec();
  }

  async create(createTodoDto: TodoDto): Promise<Todo> {
    return await new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }

  async delete(id: string): Promise<any> {
    return await this.model.findByIdAndDelete(id).exec();
  }

  async update(id: string, updateTodoDto: TodoDto): Promise<Todo> {
    return await this.model
      .findByIdAndUpdate(id, updateTodoDto, { new: true })
      .exec();
  }

  async deleteAllUserTodos(userId: string): Promise<any> {
    return await this.model.deleteMany({ createdBy: userId }).exec();
  }

  async deleteAllCompletedUserTodos(userId: string): Promise<any> {
    return await this.model
      .deleteMany({ createdBy: userId, isCompleted: true })
      .exec();
  }
}
