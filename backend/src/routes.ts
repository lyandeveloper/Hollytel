import { Router } from 'express';
import UserController from './app/controllers/UserController';
import HotelController from './app/controllers/HotelController';

const routes = Router();

routes.post('/users', UserController.create);
routes.get('/users', UserController.read);
routes.put('/users/:userId', UserController.update);

routes.post('/hotels', HotelController.create);

export default routes;
