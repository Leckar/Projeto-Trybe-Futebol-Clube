import { Router } from 'express';

import MatchController from '../controllers/MatchController';
import MatchService from '../services/MatchService';

const router = Router();
const service = new MatchService();
const controller = new MatchController(service);

router.get('/', (req, res) => controller.getMatches(req, res));

export default router;
