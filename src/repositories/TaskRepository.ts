import { PrismaClient } from '@prisma/client';
import { Task } from '../entities/Task';

export class TaskRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async create(task: Omit<Task, 'id'>): Promise<Task> {
    const createdTask = await this.prisma.task.create({
      data: task,
    });
    return new Task(
      createdTask.id,
      createdTask.name,
      createdTask.description,
      createdTask.status,
      createdTask.projectId
    );
  }

  async update(id: number, data: Partial<Omit<Task, 'id' | 'projectId'>>): Promise<Task> {
    const updatedTask = await this.prisma.task.update({
      where: { id },
      data,
    });
    return new Task(
      updatedTask.id,
      updatedTask.name,
      updatedTask.description,
      updatedTask.status,
      updatedTask.projectId
    );
  }

  async delete(id: number): Promise<void> {
    await this.prisma.task.delete({ where: { id } });
  }

  async findById(id: number): Promise<Task | null> {
    const task = await this.prisma.task.findUnique({ where: { id } });
    return task
      ? new Task(task.id, task.name, task.description, task.status, task.projectId)
      : null;
  }

  async findByProjectId(projectId: number): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany({ where: { projectId } });
    return tasks.map(
      (task) => new Task(task.id, task.name, task.description, task.status, task.projectId)
    );
  }
}