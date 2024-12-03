import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';
import { th } from '@faker-js/faker/.';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    @Post('/create')
    create(@Body() dto:UsersDTO){
        return this.userService.createUser(dto)
    }
    @Get('/all')
    getAll(){
        return this.userService.getAllUsers()
    }
    @Post('/seed')
    seedDB(){
        return this.userService.seedDatabase()
    }
    @Post("/no-more-problems")
    solveProblems(){
        return this.userService.resetProblemsFlag()
    }
}
