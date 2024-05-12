import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/Prisma/prisma.service';
import { CreateTaskDto } from './dto/create.dto';
import { UpdateTaskDto } from './dto/update.dto';
import { $Enums, Prisma, Task } from '@prisma/client';



@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.prisma.task.create({
      data: createTaskDto,
    });
  }

  findAll(authorId: string) {
    return this.prisma.task.findMany({ where : {authorId: +authorId}});
  }

  async filterByEnum(status: $Enums.Status) {
    if(!$Enums.Status[status]){
      throw new NotFoundException('Invalid status value provided')
    }
    return await this.prisma.task.findMany({
      where: {
        status: status,
      },
    })

  }

  findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async updateOne(updateTaskDto: UpdateTaskDto){
    ;
    return await this.prisma.task.update({
      where: { id : updateTaskDto.id},
      data: updateTaskDto,
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
