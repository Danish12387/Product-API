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
    res.send(`
    <h1>🛍️ Welcome to the Product API!</h1>
    <p>This API allows you to retrieve and update product data.</p>
    <hr/>
    <h3>📖 Available Endpoints:</h3>
    <ul>
      <li><strong>GET</strong> <code>/api/v1/products/:id</code> - Get product by ID</li>
      <li><strong>PUT</strong> <code>/api/v1/products/:id</code> - Update product by ID</li>
    </ul>
    <hr/>
    <p>✅ Make sure to send appropriate headers and JSON data when updating products.</p>
  `);
});

// app.listen(PORT, async () => {
//   console.log(`Product API is running on http://localhost:${PORT}`);

// });
connectToDatabase();

export default app;