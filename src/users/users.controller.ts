import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: UsersDTO, description: 'User details for creation' })
  @ApiResponse({ status: 201, description: 'The user has been created.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Post('/create')
  create(@Body() dto: UsersDTO) {
    return this.userService.createUser(dto);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'List of all users.',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          firstname: { type: 'string' },
          lastname: { type: 'string' },
          age: { type: 'number' },
          has_problems: { type: 'boolean' },
        },
      },
    },
  })
  @Get('/all')
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Seed the database with test users' })
  @ApiResponse({ status: 201, description: 'Database seeding completed.' })
  @Post('/seed')
  seedDB() {
    return this.userService.seedDatabase();
  }

  @ApiOperation({ summary: 'Reset problems flag for all users' })
  @ApiResponse({ status: 200, description: 'Problems flag reset for all users.' })
  @Post('/no-more-problems')
  solveProblems() {
    return this.userService.resetProblemsFlag();
  }
}
