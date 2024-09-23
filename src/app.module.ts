import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { GraphqlModule } from './graphql/graphql.module';
import { RestModule } from './rest/rest.module';
import { SharedModule } from './shared/shared.module';
import { Thought, ThoughtSchema } from './models/thought.schema';
import { PostNavItem, PostNavItemSchema } from './models/post-nav-item.schema';
import { Comment, CommentSchema } from './models/comment.schema';
import { Refutation, RefutationSchema } from './models/refutation.schema';
import { Response, ResponseSchema } from './models/response.schema';
import { UserInfo, UserInfoSchema } from './models/user-info.schema';
import { User, UserSchema } from './models/user.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: Thought.name, schema: ThoughtSchema },
      { name: PostNavItem.name, schema: PostNavItemSchema },
      { name: Comment.name, schema: CommentSchema },
      { name: Refutation.name, schema: RefutationSchema },
      { name: Response.name, schema: ResponseSchema },
      { name: UserInfo.name, schema: UserInfoSchema },
      { name: User.name, schema: UserSchema },
    ]),
    AuthModule,
    CoreModule,
    GraphqlModule,
    RestModule,
    SharedModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
  ],
})
export class AppModule {}
