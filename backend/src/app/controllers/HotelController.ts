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

  async read(req: Request, res: Response) {
    const hotelRepository = getRepository(Hotel);
    const hotels = await hotelRepository.find();

    return res.json(hotels);
  }

  async update(req: Request, res: Response) {
    const hotelRepository = getRepository(Hotel);
    await hotelRepository.update(req.params.hotelId, req.body);

    return res.json(req.body);
  }
}

export default new HotelController();
