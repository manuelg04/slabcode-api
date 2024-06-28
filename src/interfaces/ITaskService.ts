import { Task } from '../entities/Task';

export interface ITaskService {
  createTask(name: string, description: string | null, projectId: number): Promise<Task>;
  updateTask(id: number, name?: string, description?: string): Promise<Task>;
  deleteTask(id: number): Promise<void>;
  completeTask(id: number): Promise<Task>;
}