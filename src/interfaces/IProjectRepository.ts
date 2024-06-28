import { Project } from '../entities/Project';

export interface IProjectRepository {
    create(name: string, description: string, userId: number): Promise<Project>;
    update(id: number, name?: string, description?: string): Promise<Project>;
    delete(id: number): Promise<void>;
    findById(id: number): Promise<Project | null>;
    complete(id: number): Promise<Project>;
  }