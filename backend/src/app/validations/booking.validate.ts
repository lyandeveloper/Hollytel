import { Request, Response } from 'express';
import * as Yup from 'yup';
import { getRepository } from 'typeorm';
import Booking from '../entities/Booking';

class BookingValidate {
  async CheckEmptyFields(req: Request, res: Response) {
    const schema = Yup.object().shape({
      rooms: Yup.string().required(),
      guests: Yup.string().required(),
      check_in: Yup.string().required(),
      check_out: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }
  }
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
