import { Task } from '../entities/Task';

export interface ITaskRepository {
  create(name: string, description: string | null, projectId: number): Promise<Task>;
  update(id: number, name?: string, description?: string): Promise<Task>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Task | null>;
  findByProjectId(projectId: number): Promise<Task[]>;
  complete(id: number): Promise<Task>;
}
