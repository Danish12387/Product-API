import mongoose from "mongoose";

const productPriceSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: [true, 'Product ID is required'],
        unique: true
    },
    value: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0.01, 'Price must be greater than 0']
    },
    currency_code: {
        type: String,
        enum: ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'AUD', 'CAD', 'CNY', 'RUB', 'BRL', 'PKR', 'ZAR'],
        default: 'PKR',
    },
});

export const ProductPrice = mongoose.model("ProductPrice", productPriceSchema);