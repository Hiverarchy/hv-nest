import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Request } from 'express';

/**
 * Controller to handle authentication-related HTTP requests.
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: any): Promise<any> {
    // Implement login logic here
    return this.authService.login(loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: any): Promise<any> {
    // Implement registration logic here
    return this.authService.register(registerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() request: Request): Promise<any> {
    return request['user'];
  }
}