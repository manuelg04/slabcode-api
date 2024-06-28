import prisma from "../config/database";
import { Project } from "../entities/Project";
import { IProjectRepository } from "../interfaces/IProjectRepository";

export class ProjectRepository implements IProjectRepository {
  async create(
    name: string,
    description: string,
    userId: number
  ): Promise<Project> {
    const project = await prisma.project.create({
      data: { name, description, userId, status: "En Proceso" },
    });
    return new Project(
      project.id,
      project.name,
      project.description,
      project.status,
      project.userId
    );
  }

  async update(
    id: number,
    name?: string,
    description?: string
  ): Promise<Project> {
    const project = await prisma.project.update({
      where: { id },
      data: { name, description },
    });
    return new Project(
      project.id,
      project.name,
      project.description,
      project.status,
      project.userId
    );
  }

  async delete(id: number): Promise<void> {
    await prisma.project.delete({ where: { id } });
  }

  async findById(id: number): Promise<Project | null> {
    const project = await prisma.project.findUnique({ where: { id } });
    return project
      ? new Project(
          project.id,
          project.name,
          project.description,
          project.status,
          project.userId
        )
      : null;
  }

  async complete(id: number): Promise<Project> {
    const project = await prisma.project.update({
      where: { id },
      data: { status: "Finalizado" },
    });
    return new Project(
      project.id,
      project.name,
      project.description,
      project.status,
      project.userId
    );
  }
}
