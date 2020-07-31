import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Hotel from '../models/Hotel';

class HotelController {
  async create(req: Request, res: Response) {
    const hotelRepository = getRepository(Hotel);
    const {
      name,
      banner,
      description,
      city,
      country,
      address,
      rooms,
      guests,
    } = req.body;

    await hotelRepository.insert({
      name,
      banner,
      description,
      city,
      country,
      address,
      rooms,
      guests,
    });

    return res.json({
      name,
      banner,
      description,
      city,
      country,
      address,
      rooms,
      guests,
    });
  }
}

export default new HotelController();
