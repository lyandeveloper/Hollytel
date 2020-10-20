import { Router } from 'express';
import FavoriteController from '../app/controllers/FavoriteController';

const favorites = Router();

favorites.post('/favorites/:userId/:hotelId', FavoriteController.create);
favorites.get('/favorites/:userId/', FavoriteController.list);
favorites.delete('/favorites/:favoriteId/', FavoriteController.delete);

export default favorites;
