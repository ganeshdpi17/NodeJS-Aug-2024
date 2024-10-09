const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: Object,
})
const ProductModel = mongoose.model('products', productSchema);
module.exports = ProductModel;