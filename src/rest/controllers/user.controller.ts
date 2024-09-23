import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';

/**
 * Controller to handle User-related HTTP requests.
 */
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<any> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<any> {
    return this.userService.getUserById(id);
  }

  @Post()
  async createUser(@Body() createUserDto: any): Promise<any> {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: any): Promise<any> {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    return this.userService.deleteUser(id);
  }
}