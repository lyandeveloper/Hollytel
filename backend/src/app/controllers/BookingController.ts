import { Request, Response } from 'express';
import { getRepository, getConnection } from 'typeorm';
import Booking from '../entities/Booking';
import User from '../entities/User';
import bookingValidate from '../validations/booking.validate';

class BookingController {
  async create(req: Request, res: Response) {
    bookingValidate.checkDuplicatedBooking(req, res);

    const { rooms, guests, check_in, check_out } = req.body;
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
        check_in,
        check_out,
      })
      .execute();

    return res.json({ user: userId, hotel: hotelId, rooms, guests });
  }

  async listBookings(req: Request, res: Response) {
    const bookingRepository = getRepository(Booking);
    const { userId } = req.params;

    const bookings = await bookingRepository.find({
      where: {
        user: userId,
      },
      join: {
        alias: 'booking',
        leftJoinAndSelect: {
          hotel: 'booking.hotel',
        },
      },
    });

    return res.json(bookings);
  }

  async update(req: Request, res: Response) {
    const bookingRepository = getRepository(Booking);
    const { bookingId } = req.params;
    const { rooms, guests, check_in, check_out } = req.body;

    await bookingRepository.update(bookingId, {
      rooms,
      guests,
      check_in,
      check_out,
    });

    return res.json({ rooms, guests, check_in, check_out });
  }
}

export default new BookingController();
