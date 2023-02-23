import { TodoDto } from './dto';
import { TodoService } from './todo.service';
import { Controller, Get, Put } from '@nestjs/common';
import { Post, Delete, Body, Param } from '@nestjs/common';

@Controller('todos')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async getUserTodos(@Param('id') userId: string) {
    return await this.service.getTodoByUserId(userId);
  }

  @Delete()
  async deleteAll() {
    return await this.service.deleteAll();
  }

  @Delete('user/:userId')
  async deleteAllUserTodos(@Param('userId') userId) {
    return await this.service.deleteAllUserTodos(userId);
  }

  @Delete('completed/user/:userId')
  async deleteAllCompletedUserTodos(@Param('userId') userId) {
    return await this.service.deleteAllCompletedUserTodos(userId);
  }

  @Post()
  async create(@Body() createTodoDto: TodoDto) {
    return await this.service.create(createTodoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: TodoDto) {
    return await this.service.update(id, updateTodoDto);
  }
}
