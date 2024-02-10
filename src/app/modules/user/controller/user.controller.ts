import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserEntity } from "../../entities/user.entity";
import { UserService } from "../service/user.service";

@Controller("user")
export class UserController{
    constructor(private readonly userService: UserService){}

    @Get()
    getAll(){
        return this.userService.getAll()
    }

    @Post()
    create(@Body() user: UserEntity) {    
        return this.userService.create(user)
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updatedUser: UserEntity) {
        return this.userService.update(id, updatedUser);
    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.userService.delete(id);
    }
}