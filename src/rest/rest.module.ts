import { Module } from '@nestjs/common';
import { ThoughtController } from './controllers/thought.controller';
import { CommentController } from './controllers/comment.controller';
import { RefutationController } from './controllers/refutation.controller';
import { ResponseController } from './controllers/response.controller';
import { UserInfoController } from './controllers/user-info.controller';
import { UserController } from './controllers/user.controller';
import { ThoughtService } from './services/thought.service';
import { CommentService } from './services/comment.service';
import { RefutationService } from './services/refutation.service';
import { ResponseService } from './services/response.service';
import { UserInfoService } from './services/user-info.service';
import { UserService } from './services/user.service';

@Module({
  controllers: [
    ThoughtController,
    CommentController,
    RefutationController,
    ResponseController,
    UserInfoController,
    UserController,
  ],
  providers: [
    ThoughtService,
    CommentService,
    RefutationService,
    ResponseService,
    UserInfoService,
    UserService,
  ],
})
export class RestModule {}