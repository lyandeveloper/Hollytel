import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.post('/users', UserController.create);
routes.get('/users', UserController.read);
routes.put('/users/:userId', UserController.update);

export default routes;
