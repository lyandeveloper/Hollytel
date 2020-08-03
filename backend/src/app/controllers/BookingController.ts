import { Request, Response } from 'express';
import Booking from '../entities/Booking';
import { getRepository, getConnection } from 'typeorm';

class BookingController {
  async create(req: Request, res: Response) {
    const { rooms, guests } = req.body;
    const { userId, hotelId } = req.params;

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Booking)
      .values({
        user: () => userId,
        hotel: () => hotelId,
        rooms,
        guests,
      })
      .execute();

    return res.json({ user: userId, hotel: hotelId, rooms, guests });
  }
}

export default new BookingController();
