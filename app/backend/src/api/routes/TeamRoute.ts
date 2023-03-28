import { Request, Response, Router } from 'express';
import TeamController from '../controllers/TeamController';
import TeamService from '../services/TeamService';

const router = Router();
const service = new TeamService();
const controller = new TeamController(service);

router.get('/', (req: Request, res: Response) => controller.get(req, res));

export default router;
