import { IProjectService } from '../interfaces/IProjectService';
import { ProjectRepository } from '../repositories/ProjectRepository';
import { TaskRepository } from '../repositories/TaskRepository';
import { Project } from '../entities/Project';

export class ProjectService implements IProjectService {
  constructor(
    private projectRepository: ProjectRepository,
    private taskRepository: TaskRepository
  ) {}

  async createProject(name: string, description: string, userId: number): Promise<Project> {
    return this.projectRepository.create({ name, description, status: 'En Proceso', userId });
  }

  async updateProject(id: number, name: string, description: string): Promise<Project> {
    return this.projectRepository.update(id, { name, description });
  }

  async deleteProject(id: number): Promise<void> {
    const tasks = await this.taskRepository.findByProjectId(id);
    for (const task of tasks) {
      await this.taskRepository.delete(task.id);
    }
    await this.projectRepository.delete(id);
  }

  async completeProject(id: number): Promise<Project> {
    const project = await this.projectRepository.findById(id);
    if (!project) {
      throw new Error('Project not found');
    }

    const tasks = await this.taskRepository.findByProjectId(id);
    const allTasksCompleted = tasks.every((task) => task.status === 'Finalizado');

    if (!allTasksCompleted) {
      throw new Error('Not all tasks are completed');
    }

    return this.projectRepository.update(id, { status: 'Finalizado' });
  }
}