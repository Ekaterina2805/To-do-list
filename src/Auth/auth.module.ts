//src/auth/auth.module.ts
import { Module , forwardRef} from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/User/user.module';
import { AuthController } from './auth.controllers';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from 'src/Prisma/prisma.module';


export const jwtSecret = 'zjP7h6ZI5LoSKCRj';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    PrismaModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '24h' }, 
    }),

  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}