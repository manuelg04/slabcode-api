import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createTask = async (req: Request, res: Response) => {
  const { name, description, projectId } = req.body;

  try {
    const task = await prisma.task.create({
      data: {
        name,
        description,
        projectId,
      },
    });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description } = req.body;

  try {
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: {
        name,
        description,
      },
    });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({
      where: { id: Number(id) },
    });
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error });
  }
};

export const completeTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedTask = await prisma.task.update({
      where: { id: Number(id) },
      data: { status: "Finalizado" },
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Error completing task", error });
  }
};
