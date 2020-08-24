import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import User from '../entities/User';

class UserValidate {
  async checkUserEmptyFields(req: Request, res: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }
  }

  async checkUserExist(req: Request, res: Response) {
    const user = getRepository(User);

    const userExists = await user.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
  }
}

export default new UserValidate();
