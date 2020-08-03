import { Router } from 'express';
import UserController from './app/controllers/UserController';
import HotelController from './app/controllers/HotelController';
import BookingController from './app/controllers/BookingController';

const routes = Router();

routes.post('/users', UserController.create);
routes.get('/users/list', UserController.read);
routes.put('/users/update/:userId', UserController.update);

routes.post('/hotels/register', HotelController.create);
routes.get('/hotels/list', HotelController.read);
routes.get('/hotels/details/:hotelId', HotelController.index);
routes.put('/hotels/update/:hotelId', HotelController.update);
routes.delete('/hotels/delete/:hotelId', HotelController.delete);

routes.post('/hotels/booking/:userId/:hotelId', BookingController.create);
routes.get('/mybookings/:userId', BookingController.listBookings);
export default routes;
