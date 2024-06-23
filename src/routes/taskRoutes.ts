import express from 'express';
import {
    createTask,
    updateTask,
    deleteTask,
    completeTask,

} from '../controllers/taskController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authenticate , createTask);
router.put('/:id', authenticate, updateTask);
router.delete('/:id', authenticate, deleteTask);
router.patch('/:id/complete', authenticate, completeTask);

export default router;
