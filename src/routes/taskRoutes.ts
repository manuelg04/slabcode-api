import express from 'express';
import { TaskController } from '../controllers/taskController';
import { TaskService } from '../services/TaskService';
import { TaskRepository } from '../repositories/TaskRepository';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();
const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

router.post('/', authenticate, taskController.createTask);
router.put('/:id', authenticate, taskController.updateTask);
router.delete('/:id', authenticate, taskController.deleteTask);
router.patch('/:id/complete', authenticate, taskController.completeTask);

export default router;
