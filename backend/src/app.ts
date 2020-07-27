import express, {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
  request,
  response,
} from 'express';
import routes from './routes';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(
      (
        err: ErrorRequestHandler,
        req: Request,
        res: Response,
        next: Function
      ) => {
        if (req.xhr) {
          res.status(500).send({ error: 'Something went wrong...' });
        } else {
          next(err);
        }
      }
    );
  }

  private routes(): void {
    this.server.use(routes);

    this.server.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).send({ error: 'Not found' });
    });
  }
}

export default new App().server;
