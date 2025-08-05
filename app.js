import express from 'express';
import cors from 'cors';

import { PORT } from './config/env.js';

import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import productRouter from './routes/products.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/v1/products', productRouter);

app.use(errorMiddleware);

app.get('/', (_, res) => {
  res.send('Welcome to the Product API!');
});

// app.listen(PORT, async () => {
//   console.log(`Product API is running on http://localhost:${PORT}`);

// });
connectToDatabase();

export default app;