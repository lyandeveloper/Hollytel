import { Request, Response } from 'express';
import { getRepository, getConnection } from 'typeorm';
import Booking from '../entities/Booking';
import User from '../entities/User';

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

  async listBookings(req: Request, res: Response) {
    const bookingRepository = getRepository(Booking);

    const bookings = await bookingRepository.find({
      join: {
        alias: 'booking',
        leftJoinAndSelect: {
          user: 'booking.user',
          hotel: 'booking.hotel',
        },
      },
    });

    return res.json(bookings);
  }
}

export default new BookingController();
