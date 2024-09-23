import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserInfoService } from '../services/user-info.service';

/**
 * Controller to handle UserInfo-related HTTP requests.
 */
@Controller('user-info')
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Get()
  async getAllUserInfo(): Promise<any> {
    return this.userInfoService.getAllUserInfo();
  }

  @Get(':id')
  async getUserInfoById(@Param('id') id: string): Promise<any> {
    return this.userInfoService.getUserInfoById(id);
  }

  @Post()
  async createUserInfo(@Body() createUserInfoDto: any): Promise<any> {
    return this.userInfoService.createUserInfo(createUserInfoDto);
  }

  @Put(':id')
  async updateUserInfo(@Param('id') id: string, @Body() updateUserInfoDto: any): Promise<any> {
    return this.userInfoService.updateUserInfo(id, updateUserInfoDto);
  }

  @Delete(':id')
  async deleteUserInfo(@Param('id') id: string): Promise<any> {
    return this.userInfoService.deleteUserInfo(id);
  }
}