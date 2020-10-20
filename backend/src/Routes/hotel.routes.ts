import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '../config/multer';

import SearchController from '../app/controllers/SearchController';
import HotelController from '../app/controllers/HotelController';

const upload = multer(uploadConfig);

const hotel = Router();

hotel.post('/hotels/register', upload.array('images'), HotelController.create);
hotel.post('/hotels/searching', SearchController.searchHotels);
hotel.get('/hotels/list', HotelController.read);
hotel.get('/hotels/details/:hotelId', HotelController.index);
hotel.put('/hotels/update/:hotelId', HotelController.update);
hotel.delete('/hotels/delete/:hotelId', HotelController.delete);

export default hotel;
