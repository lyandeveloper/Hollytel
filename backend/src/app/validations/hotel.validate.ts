import { Request, Response } from 'express';
import * as Yup from 'yup';

class HotelValidate {
  async checkEmptyFields(req: Request, res: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      banner: Yup.string(),
      description: Yup.string().required(),
      city: Yup.string().required(),
      country: Yup.string().required(),
      address: Yup.string().required(),
      rooms: Yup.number().required(),
      guests: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }
  }
}

export default new HotelValidate();
