import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Hotel from '../models/Hotel';

class HotelController {
  async create(req: Request, res: Response) {
    const hotelRepository = getRepository(Hotel);
    const hotels = req.body;
    await hotelRepository.insert(hotels);

    return res.json(hotels);
  }

  async read(req: Request, res: Response) {
    const hotelRepository = getRepository(Hotel);
    const hotels = await hotelRepository.find();

    return res.json(hotels);
  }

  async index(req: Request, res: Response) {
    const hotelRepository = getRepository(Hotel);
    const hotel = await hotelRepository.findOne(req.params.hotelId);

    return res.json(hotel);
  }

  async update(req: Request, res: Response) {
    const hotelRepository = getRepository(Hotel);
    const hotels = req.body;
    await hotelRepository.update(req.params.hotelId, hotels);

    return res.json(hotels);
  }

  async delete(req: Request, res: Response) {
    const hotelRepository = getRepository(Hotel);
    await hotelRepository.delete(req.params.hotelId);

    return res.json({ message: 'Hotel deletado com sucesso!' });
  }
}

export default new HotelController();
