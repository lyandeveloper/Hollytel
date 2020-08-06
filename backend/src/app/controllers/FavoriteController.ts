import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import FavoritesHotels from '../entities/FavoritesHotels';

class FavoriteController {
  async create(req: Request, res: Response) {
    const { userId, hotelId } = req.params;
    const favoriteRepository = getRepository(FavoritesHotels);

    const favorite = await favoriteRepository.insert({
      user: () => userId,
      hotel: () => hotelId,
    });

    return res.json(favorite);
  }
}

export default new FavoriteController();
