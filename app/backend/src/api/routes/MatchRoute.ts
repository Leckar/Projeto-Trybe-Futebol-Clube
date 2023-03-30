import { Router } from 'express';

import MatchController from '../controllers/MatchController';
import MatchService from '../services/MatchService';
import verifyToken from '../middlewares/tokenVerification';

const router = Router();
const service = new MatchService();
const controller = new MatchController(service);

router.patch('/:id/finish', verifyToken, (req, res) => controller.endMatch(req, res));
router.get('/', (req, res) => controller.getMatches(req, res));

export default router;
