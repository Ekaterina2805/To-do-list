import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { AuthModule } from './Auth/auth.module';
import { TaskModule } from './Task/task.module';


@Module({
  imports: [UserModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
