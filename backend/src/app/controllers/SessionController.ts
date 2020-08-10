import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../entities/User';

interface IUser {
  id: number;
  name: string;
  avatar: string;
  provider: boolean;
}

class SessionController {
  async store(req: Request, res: Response) {
    const { email, password } = req.body;

    const userRepository = getRepository(User);

    const user = await userRepository.findOne({
      where: { email },
      select: ['id', 'name', 'avatar', 'provider'],
    });

    const { id, name, avatar, provider } = user as IUser;

    return res.json({
      user: {
        id,
        name,
        avatar,
        provider,
      },
      token: jwt.sign({ id }, String(process.env.APP_SECRET), {
        expiresIn: String(process.env.TOKEN_EXPIRES),
      }),
    });
  }
}

export default new SessionController();
