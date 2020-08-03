import { Request, Response } from 'express';
import { getRepository, Like } from 'typeorm';
import Hotel from '../entities/Hotel';

class SearchController {
  async searchHotels(req: Request, res: Response) {
    const { location } = req.query;

    const hotelRepository = getRepository(Hotel);

    const hotel = await hotelRepository.find({
      location: Like(`%${location}%`),
    });

    return res.json(hotel);
  }
}

export default new SearchController();
