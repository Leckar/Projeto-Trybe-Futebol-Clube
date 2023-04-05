import { Router } from 'express';

import LeaderboardService from '../services/LeaderboardService';
import LeaderboardController from '../controllers/LeaderboardController';

const router = Router();
const service = new LeaderboardService();
const controller = new LeaderboardController(service);

router.get('/away', (req, res) => controller.getAwayLeaderboard(req, res));
router.get('/home', (req, res) => controller.getHomeLeaderboard(req, res));
router.get('/', (req, res) => controller.getLeaderboard(req, res));

export default router;
export {
  service,
};
