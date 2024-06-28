import { ITaskService } from "../interfaces/ITaskService";
import { ITaskRepository } from "../interfaces/ITaskRepository";
import { Task } from "../entities/Task";

export class TaskService implements ITaskService {
  constructor(private taskRepository: ITaskRepository) {}

  async createTask(
    name: string,
    description: string | null,
    projectId: number
  ): Promise<Task> {
    return this.taskRepository.create(name, description, projectId);
  }

  async updateTask(
    id: number,
    name?: string,
    description?: string
  ): Promise<Task> {
    return this.taskRepository.update(id, name, description);
  }

  async deleteTask(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }

  async completeTask(id: number): Promise<Task> {
    return this.taskRepository.complete(id);
  }
}
