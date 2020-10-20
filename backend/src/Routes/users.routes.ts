import { Router } from 'express';
import UserController from '../app/controllers/UserController';

const users = Router();

users.get('/users/list', UserController.read);
users.put('/users/update/:userId', UserController.update);

export default users;
