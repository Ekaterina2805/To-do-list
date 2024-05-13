import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { Prisma, User } from "@prisma/client";
import { JwtAuthGuard } from "src/Auth/jwt-auth.guard";

@Controller('/user')
export class UserController{
    constructor (private readonly userService: UserService){}


    @Post()
    // @UseGuards(JwtAuthGuard)
    async createUser(@Body() data: Prisma.UserCreateInput):Promise<User>{
        return await this.userService.create(data)
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async updateUser(@Param('id') id: number, @Body() data: Prisma.UserUpdateInput):Promise<User>{
        return await this.userService.update(id, data)
    }


    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deleteUser(@Param('id') id: number){
        return await this.userService.remove(id)
    }

}