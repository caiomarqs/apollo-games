import { app } from './index';
import { initDb } from './database/Mongo';
import { MyError } from './utils/interfaces';
import { keys } from './config/config';

const { PORT } = keys;

initDb((error: MyError) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(PORT);
  }
});
