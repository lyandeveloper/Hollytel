import * as Yup from 'yup';
import { Request, Response } from 'express';

class SearchValidate {
  async checkEmptyFields(req: Request, res: Response) {
    const schema = Yup.object().shape({
      city: Yup.string().required(),
      country: Yup.string().required(),
      rooms: Yup.number().required(),
      guests: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }
  }
}

export default new SearchValidate();
