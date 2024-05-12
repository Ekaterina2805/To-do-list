import { forwardRef, Module } from "@nestjs/common";
import { UserController } from "./user.controllers";
import { UserService } from "./user.service";
import { PrismaService } from "src/Prisma/prisma.service";
import { AuthModule } from "src/auth/auth.module";
import { PrismaModule } from "src/Prisma/prisma.module";

@Module({
    controllers: [UserController],
    providers: [UserService, PrismaService],
    imports: [forwardRef(() => AuthModule), PrismaModule],
    exports:[UserService]
})
export class UserModule {}