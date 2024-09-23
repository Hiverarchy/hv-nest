import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { RolesGuard } from './guards/roles.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { RequestLoggerMiddleware } from './middlewares/request-logger.middleware';

@Module({
  providers: [HttpExceptionFilter, RolesGuard, LoggingInterceptor],
})
export class CoreModule {}