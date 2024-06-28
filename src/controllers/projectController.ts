import { Request, Response } from "express";
import { IProjectService } from "../interfaces/IProjectService";

export class ProjectController {
  constructor(private projectService: IProjectService) {}

  createProject = async (req: Request, res: Response): Promise<void> => {
    const { name, description } = req.body;
    const userId = (req as any).user.userId;

    try {
      const project = await this.projectService.createProject(
        name,
        description,
        userId
      );
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ message: "Error creating project", error });
    }
  };

  updateProject = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
      const project = await this.projectService.updateProject(
        Number(id),
        name,
        description
      );
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Error updating project", error });
    }
  };

  deleteProject = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      await this.projectService.deleteProject(Number(id));
      res.json({
        message: "Project and associated tasks deleted successfully",
      });
    } catch (error) {
      res.status(500).json({ message: "Error deleting project", error });
    }
  };

  completeProject = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
      const project = await this.projectService.completeProject(Number(id));
      res.json(project);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unexpected error occurred while completing the project' });
      }
    }
  };
}
