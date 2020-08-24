import { Request, Response } from 'express';
import * as Yup from 'yup';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import User from '../entities/User';

class SessionValidate {
  async checkSessionEmptyFields(req: Request, res: Response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }
  }

  async checkUserExist(req: Request, res: Response) {
    const user = getRepository(User);

    const userExists = await user.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userExists) {
      return res.status(401).json({ error: 'User not found' });
    }
  }

  async checkPassword(req: Request, res: Response) {
    const userRepository = getRepository(User);

    const user: any = await userRepository.findOne({
      where: {
        email: req.body.email,
      },
    });
    const passwordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordCorrect) {
      return res.status(401).json({ error: 'Password does not match' });
    }
  }
}

export default new SessionValidate();
