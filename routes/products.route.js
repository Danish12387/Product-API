import { Router } from 'express';
import { addDummyPrices, getProductById, updateProductPrice } from '../controllers/product.controller.js';

const productRouter = Router();

productRouter.get('/:id', getProductById);

productRouter.put('/:id', updateProductPrice);

productRouter.post('/seed-prices', addDummyPrices);

export default productRouter;