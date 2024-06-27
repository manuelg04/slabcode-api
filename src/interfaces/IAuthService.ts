import { User } from '../entities/User';

export interface IAuthService {
  login(username: string, password: string): Promise<string>;
  validateToken(token: string): Promise<User>;
}