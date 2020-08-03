import { Request, Response } from 'express';

class BookingController {
  async create(req: Request, res: Response) {
    const { user, hotel, rooms, guests } = req.body;
  }
}

export default new BookingController();
