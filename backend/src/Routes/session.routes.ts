import { Router } from 'express';

import multer from 'multer';
import authMiddleware from '../app/middlewares/auth';
import UserController from '../app/controllers/UserController';
import SessionController from '../app/controllers/SessionController';
import uploadConfig from '../config/multer';

const upload = multer(uploadConfig);

const routes = Router();

routes.post('/users/create', upload.single('avatar'), UserController.create);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

export default routes;
