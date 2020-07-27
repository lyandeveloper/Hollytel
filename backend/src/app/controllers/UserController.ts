import { Request, Response } from 'express';
import { getConnection } from 'typeorm';
import User from '../models/User';

class UserController {
  async create(req: Request, res: Response) {
    const {
      name,
      email,
      password,
      avatar,
      born,
      city,
      address,
      phone,
      country,
    } = req.body;

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        name,
        email,
        password,
        avatar,
        born,
        city,
        address,
        phone,
        country,
      })
      .execute();

    return res.json({
      name,
      email,
      password,
      avatar,
      born,
      address,
      phone,
      country,
    });
  }
}

export default new UserController();
