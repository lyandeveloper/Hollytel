import { Request, Response } from 'express';
import { getConnection, getRepository } from 'typeorm';
import User from '../models/User';
import HandlePassword from '../helpers/HandlePassword';

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

    const handlePassword = new HandlePassword();
    const passwordHash = await handlePassword.hashPassword(password, 8);

    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        name,
        email,
        password: passwordHash,
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
      passwordHash,
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

  async update(req: Request, res: Response) {
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
    const userRepository = getRepository(User);
    await userRepository.update(req.params.userId, {
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
    });

    return res.json({
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
    });
  }
}

export default new UserController();
