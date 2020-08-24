import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../entities/User';
import sessionValidate from '../validations/session.validate';

interface IUser {
  id: number;
  name: string;
  avatar: string;
  provider: boolean;
}

class SessionController {
  async store(req: Request, res: Response) {
    sessionValidate.checkSessionEmptyFields(req, res);
    sessionValidate.checkUserExist(req, res);
    sessionValidate.checkPassword(req, res);

    const { email } = req.body;

    const userRepository = getRepository(User);

    const user: any = await userRepository.findOne({
      where: { email },
      select: [
        'id',
        'name',
        'email',
        'password',
        'born',
        'address',
        'avatar',
        'provider',
      ],
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
