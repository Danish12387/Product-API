import axios from "axios";
import { ProductPrice } from "../models/product.model.js";

export const getProductById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const productRes = await axios.get(`https://fakestoreapi.com/products/${id}`);
        const product = productRes.data;

        if (!product) return res.status(404).json({ error: "Product not found" });

        const priceData = await ProductPrice.findOne({ productId: id });
        if (!priceData) return res.status(404).json({ error: "Price not found" });

        res.status(200).json({
            id: product.id,
            title: product.title,
            current_price: {
                value: priceData.value,
                currency_code: priceData.currency_code
            }
        });
    } catch (err) {
        next(err);
    }
};

export const updateProductPrice = async (req, res, next) => {
    const { id } = req.params;
    const { current_price } = req.body;

    try {
        const updated = await ProductPrice.findOneAndUpdate(
            { productId: id },
            {
                value: current_price.value,
                currency_code: current_price.currency_code
            },
            { new: true, upsert: true, runValidators: true }
        );

        res.status(200).json({
            message: 'Price updated',
            data: {
                productId: updated.productId,
                value: updated.value,
                currency_code: updated.currency_code
            }
        });
    } catch (err) {
        next(err);
    }
}

export const addDummyPrices = async (_, res, next) => {
    try {
        const dummyPrices = [
            { productId: 11, value: 3.64, currency_code: "EUR" },
            { productId: 12, value: 10.35, currency_code: "JPY" },
            { productId: 13, value: 13.49, currency_code: "USD" },
            { productId: 14, value: 9.99, currency_code: "PKR" },
            { productId: 15, value: 19.99, currency_code: "USD" },
            { productId: 16, value: 7.5, currency_code: "CAD" },
            { productId: 17, value: 5.0, currency_code: "USD" },
            { productId: 18, value: 12.99, currency_code: "INR" },
            { productId: 19, value: 8.75, currency_code: "ZAR" },
            { productId: 20, value: 15.0, currency_code: "PKR" }
        ];

        const result = await ProductPrice.insertMany(dummyPrices);

        res.status(200).json({
            message: 'Dummy prices added successfully',
            insertedCount: result.length
        });
    } catch (err) {
        next(err);
    }
};