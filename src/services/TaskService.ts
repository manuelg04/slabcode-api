import { ITaskService } from '../interfaces/ITaskService';
import { TaskRepository } from '../repositories/TaskRepository';
import { Task } from '../entities/Task';

export class TaskService implements ITaskService {
  constructor(private taskRepository: TaskRepository) {}

  async createTask(name: string, description: string | null, projectId: number): Promise<Task> {
    return this.taskRepository.create({ name, description, status: 'En Proceso', projectId });
  }

  async updateTask(id: number, name: string, description: string | null): Promise<Task> {
    return this.taskRepository.update(id, { name, description });
  }

  async deleteTask(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }

  async completeTask(id: number): Promise<Task> {
    return this.taskRepository.update(id, { status: 'Finalizado' });
  }
}