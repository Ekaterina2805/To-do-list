
import { Controller, Post, Get, Body, Param, Patch, Delete, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create.dto';
import { UpdateTaskDto } from './dto/update.dto';
import { $Enums, Task } from '@prisma/client';

@Controller('/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get('all/:authorId')
  findAll(@Param('authorId') authorId: string ) {
    return this.taskService.findAll(authorId);
  }

  @Get(':status')
  filterStatus(@Param('status') status: $Enums.Status ) {
    // console.log(status)
    return this.taskService.filterByEnum(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }
 
  @Put()
  async updateTask(@Body() updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.taskService.updateOne(updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}