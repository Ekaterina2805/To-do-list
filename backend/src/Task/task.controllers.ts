
import { Controller, Post, Get, Body, Param, Patch, Delete, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { TaskService } from './task.service';
import { $Enums, Prisma, Task } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() data: Prisma.TaskCreateInput) {
    return this.taskService.create(data);
  }
  
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createWithMedia(@UploadedFile() file: Express.Multer.File, @Body() data: Prisma.TaskCreateInput): Promise<Task> {
    return this.taskService.createWithMedia(data, file);
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
  async updateTask(@Body() data: Prisma.TaskUncheckedUpdateInput): Promise<Task> {
    return this.taskService.updateOne(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}