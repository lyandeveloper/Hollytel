import { Request, Response } from 'express';
import { getRepository, Like } from 'typeorm';
import Hotel from '../entities/Hotel';

class SearchController {
  async searchHotels(req: Request, res: Response) {
    const { city, country, rooms, guests } = req.body;

    const hotelRepository = getRepository(Hotel);

    const hotel = await hotelRepository.find({
      where: {
        city,
        country,
        rooms,
        guests,
      },
    });

    return res.json(hotel);
  }
}

export default new SearchController();
