
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TaskController } from './task.controllers';
import { TaskService } from './task.service';
import { PrismaService } from 'src/Prisma/prisma.service';
import { MediaUploadService } from './media.upload.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService,PrismaService, MediaUploadService],
  imports: [PrismaModule],
  exports: [TaskService, MediaUploadService]
})
export class TaskModule {}