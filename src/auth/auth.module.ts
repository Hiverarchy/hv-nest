import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';

/**
 * Module to handle authentication-related functionalities.
 */
@Module({
  providers: [AuthService, AuthResolver],
  controllers: [AuthController],
})
export class AuthModule {}