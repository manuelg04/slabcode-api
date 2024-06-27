import { PrismaClient } from '@prisma/client';
import { Project } from '../entities/Project';

export class ProjectRepository {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async create(project: Omit<Project, 'id'>): Promise<Project> {
    const createdProject = await this.prisma.project.create({
      data: project,
    });
    return new Project(
      createdProject.id,
      createdProject.name,
      createdProject.description,
      createdProject.status,
      createdProject.userId
    );
  }

  async update(id: number, data: Partial<Omit<Project, 'id' | 'userId'>>): Promise<Project> {
    const updatedProject = await this.prisma.project.update({
      where: { id },
      data,
    });
    return new Project(
      updatedProject.id,
      updatedProject.name,
      updatedProject.description,
      updatedProject.status,
      updatedProject.userId
    );
  }

  async delete(id: number): Promise<void> {
    await this.prisma.project.delete({ where: { id } });
  }

  async findById(id: number): Promise<Project | null> {
    const project = await this.prisma.project.findUnique({ where: { id } });
    return project
      ? new Project(project.id, project.name, project.description, project.status, project.userId)
      : null;
  }
}