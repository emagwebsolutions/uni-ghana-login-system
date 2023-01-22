import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import connection from './config/connect';
import routes from './routes';
import handleErrors from './error/handleErrors';

dotenv.config({ path: path.resolve(__dirname, '../config.env') });

const app = express();

const PORT = process.env.PORT || 8000;

connection();

app.use(express.json())
app.use(routes);
app.use(handleErrors);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('unhandledRejection', (err: { message: string }, promise) => {
  console.log(err.message);
  server.close(() => process.exit(1));
});
