import { Request, Response } from 'express';
import { getConnection, getManager, getRepository } from 'typeorm';
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
      provider,
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
        provider,
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
      provider,
    });
  }

  async read(req: Request, res: Response) {
    const userRepository = getRepository(User);
    const user = await userRepository.find({
      select: [
        'id',
        'name',
        'email',
        'avatar',
        'born',
        'city',
        'address',
        'phone',
        'country',
      ],
    });
    await userRepository.save(user);

    return res.json(user);
  }
}

export default new UserController();
