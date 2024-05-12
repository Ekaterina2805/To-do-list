import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "@prisma/client";
import { JwtAuthGuard } from "src/Auth/jwt-auth.guard";

@Controller('/user')
export class UserController{
    constructor (private readonly userService: UserService){}


    @Post()
    @UseGuards(JwtAuthGuard)
    async createUser(@Body() postData: User):Promise<User>{
        return this.userService.create(postData)
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async updateUser(@Param('id') id: number, @Body() postData: User):Promise<User>{
        return this.userService.update(id, postData)
    }


    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deleteUser(@Param('id') id: number){
        return this.userService.remove(id)
    }

}