import { Router } from 'express';

import UserService from '../services/UserService';
import UserController from '../controllers/UserController';
import verifyToken from '../middlewares/tokenVerification';

const router = Router();
const service = new UserService();
const controller = new UserController(service);

router.get('/role', verifyToken, (req, res) => controller.roleConfirmation(req, res));
router.post('/', (req, res) => controller.login(req, res));

export default router;
