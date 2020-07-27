import 'dotenv/config';
import express, { Request, Response, ErrorRequestHandler } from 'express';
import 'reflect-metadata';
import routes from './routes';
import './database';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(this.ClientErrorHandler);
  }

  private ClientErrorHandler(
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: Function
  ) {
    if (req.xhr) {
      res.status(500).send({ error: 'Something went wrong...' });
    } else {
      next(err);
    }
  }

  private NotFoundError(req: Request, res: Response) {
    res.status(404).send({ error: 'Not found' });
  }

  private routes(): void {
    this.server.use(routes);
    this.server.use(this.NotFoundError);
  }
}

export default new App().server;
