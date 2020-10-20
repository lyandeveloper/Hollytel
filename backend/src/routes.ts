import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import HotelController from './app/controllers/HotelController';
import BookingController from './app/controllers/BookingController';
import SearchController from './app/controllers/SearchController';
import FavoriteController from './app/controllers/FavoriteController';
import SessionController from './app/controllers/SessionController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/users/create', upload.single('avatar'), UserController.create);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.get('/users/list', UserController.read);
routes.put('/users/update/:userId', UserController.update);

routes.post('/hotels/register', upload.array('images'), HotelController.create);
routes.get('/hotels/list', HotelController.read);
routes.get('/hotels/details/:hotelId', HotelController.index);
routes.put('/hotels/update/:hotelId', HotelController.update);
routes.delete('/hotels/delete/:hotelId', HotelController.delete);

routes.post('/hotels/booking/:userId/:hotelId', BookingController.create);
routes.get('/mybookings/:userId', BookingController.listBookings);
routes.put('/mybookings/:bookingId', BookingController.update);

routes.post('/hotels/searching', SearchController.searchHotels);

routes.post('/favorites/:userId/:hotelId', FavoriteController.create);
routes.get('/favorites/:userId/', FavoriteController.list);
routes.delete('/favorites/:favoriteId/', FavoriteController.delete);

export default routes;
