import { Request, Response } from "express";
import { ITaskService } from "../interfaces/ITaskService";

export class TaskController {
  constructor(private taskService: ITaskService) {}

  createTask = async (req: Request, res: Response): Promise<void> => {
    const { name, description, projectId } = req.body;

    try {
      const task = await this.taskService.createTask(
        name,
        description,
        projectId
      );
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ message: "Error creating task", error });
    }
  };

  updateTask = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
      const task = await this.taskService.updateTask(
        Number(id),
        name,
        description
      );
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: "Error updating task", error });
    }
  };

  deleteTask = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      await this.taskService.deleteTask(Number(id));
      res.json({ message: "Task deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting task", error });
    }
  };

  completeTask = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      const task = await this.taskService.completeTask(Number(id));
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: "Error completing task", error });
    }
  };
}
