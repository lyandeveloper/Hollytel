import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Booking from '../entities/Booking';

class BookingValidate {
  async checkDuplicatedBooking(req: Request, res: Response) {
    const booking = getRepository(Booking);
    const hotelExist = await booking.findOne({
      where: {
        hotel: req.params.hotelId,
      },
    });

    if (hotelExist) {
      return res
        .status(401)
        .json({ error: 'You already have a booking with this hotel' });
    }
  }
}

export default new BookingValidate();
