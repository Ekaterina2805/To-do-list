import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { AuthModule } from './Auth/auth.module';
import { TaskModule } from './Task/task.module';
import { MediaUploadService } from './Task/media.upload.service';
import { AppGateway } from './app.gateway';



@Module({
  imports: [UserModule, TaskModule, AuthModule],
  controllers: [],
  providers: [AppGateway],
})
export class AppModule {}
