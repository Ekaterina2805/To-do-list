import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/Prisma/prisma.service';
import { $Enums, Prisma, Task } from '@prisma/client';
import { MediaUploadService } from './media.upload.service';



@Injectable()
export class TaskService {
  constructor(
    private prisma: PrismaService, 
    private mediaUploadService: MediaUploadService,

  ) {}
  
  async create(data: Prisma.TaskCreateInput) {
    return await this.prisma.task.create({
      data,
    });
  }

  async createWithMedia(data: Prisma.TaskCreateInput, file: Express.Multer.File): Promise<Task> {
    const mediaPath = await this.mediaUploadService.uploadMedia(file);
    return this.prisma.task.create({
      data: {
        ...data,
        media: mediaPath,
      },
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

  async updateOne(data: Prisma.TaskUncheckedUpdateInput){
    
    return await this.prisma.task.update({
      where: { id : Number(data.id)},
      data
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
