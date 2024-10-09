const connectToDB = require('../utils/db_Connect');
const ProductModel = require('../models/productSchema')

exports.getAllProducts = async (parent, args) => {
    await connectToDB();
    const allProducts = await ProductModel.find({});
    return allProducts;
}
exports.getProduct = async (parent, args) => {
    await connectToDB();
    const res = await ProductModel.find({ id: args.id });
    return res[0];
}
exports.addProduct = async (parent, args) => {
    await connectToDB();
    let { id, title, price, category, image, description } = args;
    let newProduct = new ProductModel({ id, title, price, category, image, description });
    let res = await newProduct.save();
    return res;
}