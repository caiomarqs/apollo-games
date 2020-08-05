import { UserState } from 'models/User';

export interface Database {
  insertOneEmailAndPassword<T extends UserState>(
    insertObject: object
  ): Promise<T>;

  fetchOneForLogIn<T extends UserState>(insertObject: {
    email: string;
    password: string;
  }): Promise<T | { message: string }>;
}

export interface MyCallback<T> {
  (error: MyError, result: T): void;
}
export type MyError = Error | null;
