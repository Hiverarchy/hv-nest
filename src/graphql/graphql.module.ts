import { Module } from '@nestjs/common';
import { ThoughtResolver } from './resolvers/thought.resolver';
import { CommentResolver } from './resolvers/comment.resolver';
import { RefutationResolver } from './resolvers/refutation.resolver';
import { ResponseResolver } from './resolvers/response.resolver';
import { UserInfoResolver } from './resolvers/user-info.resolver';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  providers: [
    ThoughtResolver,
    CommentResolver,
    RefutationResolver,
    ResponseResolver,
    UserInfoResolver,
    UserResolver,
  ],
})
export class GraphqlModule {}