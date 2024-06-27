import { PrismaClient } from '@prisma/client';
import { User } from '../entities/User';
import { IUserRepository } from '../interfaces/IUserRepository';

export class UserRepository implements IUserRepository{
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { username } });
    return user ? new User(user.id, user.username, user.password) : null;
  }

  async findById(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ? new User(user.id, user.username, user.password) : null;
  }

}