import { Router } from 'express';
import TeamController from '../controllers/TeamController';
import TeamService from '../services/TeamService';

const router = Router();
const service = new TeamService();
const controller = new TeamController(service);

router.get('/', (req, res) => controller.get(req, res));
router.get('/:id', (req, res) => controller.getById(req, res));

export default router;
