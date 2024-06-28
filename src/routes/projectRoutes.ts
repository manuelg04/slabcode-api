import express from "express";
import { ProjectController } from "../controllers/projectController";
import { ProjectService } from "../services/ProjectService";
import { ProjectRepository } from "../repositories/ProjectRepository";
import { TaskRepository } from "../repositories/TaskRepository";
import { authenticate } from "../middlewares/authMiddleware";

const router = express.Router();
const projectRepository = new ProjectRepository();
const taskRepository = new TaskRepository();
const projectService = new ProjectService(projectRepository, taskRepository);
const projectController = new ProjectController(projectService);

router.post("/", authenticate, projectController.createProject);
router.put("/:id", authenticate, projectController.updateProject);
router.delete("/:id", authenticate, projectController.deleteProject);
router.patch("/:id/complete", authenticate, projectController.completeProject);

export default router;
