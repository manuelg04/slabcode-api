import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

interface CustomRequest extends Request {
  user?: {
    userId: number;
  };
}

const prisma = new PrismaClient();

export const createProject = async (req: CustomRequest, res: Response) => {
    const { name, description } = req.body;
    const userId = req.user?.userId;
  
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    try {
      const project = await prisma.project.create({
        data: {
          name,
          description,
          userId,
        },
      });
  
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: 'Error creating project', error });
    }
  };

export const updateProject = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;
  
    try {
      const project = await prisma.project.update({
        where: { id: Number(id) },
        data: {
          name,
          description,
        },
      });
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: 'Error updating project', error });
    }
  };

  export const deleteProject = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      await prisma.task.deleteMany({
        where: { projectId: Number(id) },
      });
  
      await prisma.project.delete({
        where: { id: Number(id) },
      });
  
      res.json({ message: 'Project and associated tasks deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting project', error });
    }
  };

  export const completeProject = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    try {
      const project = await prisma.project.findUnique({
        where: { id: Number(id) },
        include: { tasks: true },
      });
  
      if (!project) {
        return res.status(404).json({ message: 'Project not found' });
      }
  
      const allTasksCompleted = project.tasks.every((task: { status: string }) => task.status === 'Finalizado');
  
      if (!allTasksCompleted) {
        return res.status(400).json({ message: 'Not all tasks are completed' });
      }
  
      const updatedProject = await prisma.project.update({
        where: { id: Number(id) },
        data: { status: 'Finalizado' },
      });
  
      res.json(updatedProject);
    } catch (error) {
      console.error('Error completing project:', error);
      res.status(500).json({ message: 'Error completing project', error });
    }
  };