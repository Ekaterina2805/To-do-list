
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TaskController } from './task.controllers';
import { TaskService } from './task.service';
import { PrismaService } from 'src/Prisma/prisma.service';

@Module({
  controllers: [TaskController],
  providers: [TaskService,PrismaService],
  imports: [PrismaModule],
  exports: [TaskService]
})
export class TaskModule {}