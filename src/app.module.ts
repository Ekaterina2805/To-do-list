import { Module } from '@nestjs/common';
import { UserModule } from './User/user.module';
import { AuthModule } from './Auth/auth.module';


@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
