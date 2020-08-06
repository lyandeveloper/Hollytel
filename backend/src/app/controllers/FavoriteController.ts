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

  async list(req: Request, res: Response) {
    const favoriteRepository = getRepository(FavoritesHotels);
    const { userId } = req.params;

    const favorites = await favoriteRepository.find({
      where: {
        user: userId,
      },
      join: {
        alias: 'favorites_hotels',
        leftJoinAndSelect: {
          hotel: 'favorites_hotels.hotel',
        },
      },
    });

    return res.json(favorites);
  }
}

export default new FavoriteController();
