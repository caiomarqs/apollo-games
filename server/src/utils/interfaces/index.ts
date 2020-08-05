import { UserState } from 'models/User';
import { ObjectId } from 'mongodb';

export interface Database {
  insertOneEmailAndPassword<T extends UserState>(
    insertObject: object
  ): Promise<T>;

  fetchOneForLogIn<T extends UserState>(insertObject: {
    email: string;
    password: string;
  }): Promise<T>;

  fetchOneById<T>(_id: ObjectId): Promise<T>;
}

export interface MyCallback<T> {
  (error: MyError, result: T): void;
}
export type MyError = Error | null;
