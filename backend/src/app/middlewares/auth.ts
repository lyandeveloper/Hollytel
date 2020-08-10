import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import { Request, Response } from 'express';

export default async (req: Request, res: Response, next: Function) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded: any = await promisify(jwt.verify)(
      token,
      String(process.env.APP_SECRET)
    );

    req.body.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid ' });
  }
};
