import { Router } from 'express';
import UserController from './app/controllers/UserController';
import HotelController from './app/controllers/HotelController';

const routes = Router();

routes.post('/users', UserController.create);
routes.get('/users/list', UserController.read);
routes.put('/users/update/:userId', UserController.update);

routes.post('/hotels/register', HotelController.create);
routes.get('/hotels/list', HotelController.read);
routes.get('/hotels/details/:hotelId', HotelController.index);
routes.put('/hotels/update/:hotelId', HotelController.update);
routes.delete('/hotels/delete/:hotelId', HotelController.delete);
export default routes;
