const mongoose = require('mongoose');
const { gql } = require('apollo-server-express');
const connectToDB = require('./utils/db_Connect');
const { getAllProducts, getProduct, addProduct } = require('./controllers/ProductController');


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
    type Mutation{
       addProduct(id: Int,
            title: String,
            price: Float,
            description: String,
            category: String,
            image: String) : Product
        updateProduct(id: Int,
            title: String,
            price: Float,
            description: String,
            category: String,
            image: String):Product
        deleteProduct(id:Int) : String
    }
`


exports.resolvers = {
    Query: {
        getProductList: getAllProducts,
        getProduct: getProduct
    },
    Mutation: {
        addProduct: addProduct,
        updateProduct: async (parent, args) => {
            await connectToDB();
            let { id, title, price, category, image, description } = args;
            let res = await ProductModel.findOneAndUpdate({ id }, { id, title, price, category, image, description });
            return res;
        },
        deleteProduct: async (parent, args) => {
            await connectToDB();
            let { id } = args;
            await ProductModel.findOneAndDelete({ id })
            return `Product ${id} deleted succesfully`
        }
    }
}