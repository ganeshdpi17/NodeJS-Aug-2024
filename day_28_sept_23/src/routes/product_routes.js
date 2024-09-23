const express = require('express');
const { getProducts, getProductById } = require('../controllers/product_controller');

const productRouter = express.Router();

productRouter.get('/', getProducts)
productRouter.get('/:id', getProductById)

module.exports = productRouter;