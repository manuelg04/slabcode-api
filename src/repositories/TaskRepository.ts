import prisma from "../config/database";
import { Task } from "../entities/Task";
import { ITaskRepository } from "../interfaces/ITaskRepository";

export class TaskRepository implements ITaskRepository {
  async create(
    name: string,
    description: string | null,
    projectId: number
  ): Promise<Task> {
    const task = await prisma.task.create({
      data: { name, description, projectId, status: "En Proceso" },
    });
    return new Task(
      task.id,
      task.name,
      task.description,
      task.status,
      task.projectId
    );
  }

  async update(id: number, name?: string, description?: string): Promise<Task> {
    const task = await prisma.task.update({
      where: { id },
      data: { name, description },
    });
    return new Task(
      task.id,
      task.name,
      task.description,
      task.status,
      task.projectId
    );
  }

  async delete(id: number): Promise<void> {
    await prisma.task.delete({ where: { id } });
  }

  async findById(id: number): Promise<Task | null> {
    const task = await prisma.task.findUnique({ where: { id } });
    return task
      ? new Task(
          task.id,
          task.name,
          task.description,
          task.status,
          task.projectId
        )
      : null;
  }

  async findByProjectId(projectId: number): Promise<Task[]> {
    const tasks = await prisma.task.findMany({ where: { projectId } });
    return tasks.map(
      (task) =>
        new Task(
          task.id,
          task.name,
          task.description,
          task.status,
          task.projectId
        )
    );
  }

  async complete(id: number): Promise<Task> {
    const task = await prisma.task.update({
      where: { id },
      data: { status: "Finalizado" },
    });
    return new Task(
      task.id,
      task.name,
      task.description,
      task.status,
      task.projectId
    );
  }
}
