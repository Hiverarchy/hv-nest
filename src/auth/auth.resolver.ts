import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';

/**
 * Resolver to handle authentication-related GraphQL requests.
 */
@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => String)
  async login(@Args('loginInput') loginInput: any): Promise<string> {
    // Implement login logic here
    return this.authService.login(loginInput);
  }

  @Mutation(() => String)
  async register(@Args('registerInput') registerInput: any): Promise<string> {
    // Implement registration logic here
    return this.authService.register(registerInput);
  }
}