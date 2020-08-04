import { Request, Response } from 'express';
export interface Database {
  insertOneEmailAndPassword(
    insertObject: object,
    res: Response,
    token?: string
  ): void;
  fetchOneById(req: Request, res: Response): void;
  fetchOneForLogIn(req: Request, res: Response): void;
  fetchMany(req: Request, res: Response): void;
  updateOne(req: Request, res: Response): void;
  fetchOneFiltered(req: Request, res: Response, filter: object): void;
}

export interface MyCallback<T> {
  (error: MyError, result: T): void;
}
export type MyError = Error | null;
