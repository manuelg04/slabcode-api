import express from 'express';
import {
createProject,
updateProject,
deleteProject,
completeProject,
} from '../controllers/projectController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authenticate, createProject);
router.put('/:id', authenticate, updateProject);
router.delete('/:id', authenticate, deleteProject);
router.patch('/:id/complete', authenticate , completeProject);

export default router;
