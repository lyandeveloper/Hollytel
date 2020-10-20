import { Request, Response } from 'express';
import { getConnection, getRepository } from 'typeorm';
import User from '../entities/User';
import HandlePassword from '../helpers/HandlePassword';
import userValidate from '../validations/user.validate';
import MailProvider from '../../config/mail';

class UserController {
  async create(req: Request, res: Response) {
    userValidate.checkUserEmptyFields(req, res);
    userValidate.checkUserExist(req, res);
    const { filename } = req.file;
    const {
      name,
      email,
      password,
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
        avatar: filename,
        born,
        city,
        address,
        phone,
        country,
        provider,
      })
      .execute();

    const mail = new MailProvider();

    await mail.sendMail({
      to: {
        name,
        email,
      },
      subject: 'Bem-vindo ao Hollytel',
      body:
        '<p>Olá, estamos felizes por ter se cadastrado em nossa plataforma, encontre hotéis do seu gosto e faça belas viagens.</p>',
    });

    return res.json({
      name,
      email,
      password: passwordHash,
      avatar: filename,
      born,
      city,
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
