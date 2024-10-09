const mongoose = require('mongoose');
const { gql } = require('apollo-server-express');
const ProductModel = require('./models/productSchema')

exports.typeDefs = gql`
    type Product{
        id: Int,
        title: String,
        price: Float,
        description: String,
        category: String,
        image: String,
    }
    type Query{
        getProductList : [Product]
        getProduct(id:Int) : Product
    }
`
const db_url = 'mongodb://localhost:27017/sept_2024';
const connect = async () => {
    await mongoose.connect(db_url)
}

exports.resolvers = {
    Query: {
        getProductList: async (parent, args) => {
            await connect();
            const allProducts = await ProductModel.find({});
            return allProducts;
        },
        getProduct: async (parent, args) => {
            await connect();
            const res = await ProductModel.find({ id: args.id });
            return res[0];
        }
    }
}