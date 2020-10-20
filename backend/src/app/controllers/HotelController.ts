import { Request, Response } from 'express';
import { getRepository, getConnection } from 'typeorm';
import Hotel from '../entities/Hotel';
import hotelValidate from '../validations/hotel.validate';

class HotelController {
  async create(req: Request, res: Response): Promise<Response> {
    hotelValidate.checkEmptyFields(req, res);
    const {
      name,
      description,
      city,
      country,
      address,
      rooms,
      guests,
    } = req.body;
    const images = (req as any).files;
    const imagesName: any = [];

    for (let index = 0; index < images.length; index++) {
      imagesName[index] = images[index].filename;
    }

    const hotel = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Hotel)
      .values({
        name,
        banner01: imagesName[0],
        banner02: imagesName[1],
        banner03: imagesName[2],
        banner04: imagesName[3],
        description,
        city,
        country,
        address,
        rooms,
        guests,
      })
      .execute();

    return res.status(201).json(hotel);
  }

  async read(req: Request, res: Response): Promise<Response> {
    const hotelRepository = getRepository(Hotel);
    const hotels = await hotelRepository.find();

    return res.json(hotels);
  }

  async index(req: Request, res: Response): Promise<Response> {
    const hotelRepository = getRepository(Hotel);
    const hotel = await hotelRepository.findOne(req.params.hotelId);

    return res.json(hotel);
  }

  async update(req: Request, res: Response): Promise<Response> {
    hotelValidate.checkEmptyFields(req, res);
    const hotelRepository = getRepository(Hotel);
    const hotels = req.body;
    await hotelRepository.update(req.params.hotelId, hotels);

    return res.json(hotels);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const hotelRepository = getRepository(Hotel);
    await hotelRepository.delete(req.params.hotelId);

    return res.json({ message: 'Hotel deletado com sucesso!' });
  }
}

export default new HotelController();
