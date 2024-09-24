const express = require('express');
const products = require('./products.json');
const products_2 = require('./products_2.json');
const app = express();

// All Products
app.get('/products', (req, res) => {
    res.json(products);
})

// 1 Products  (path param)
app.get('/products/:id([0-9]{1,2})', (req, res) => {
    const id = +req.params.id;
    const result = products.find(prod => prod.id === id);
    if (!result) {
        res.status(404).send("Product Doesn't exist");
    }
    res.json(result);
})

// route to return 1 review info for a particular product
app.get('/products/:prodId/reviews/:reviewId', (req, res) => {
    const { prodId, reviewId } = req.params;
    const singleProduct = products_2.find(prod => prod.id == prodId);
    if (singleProduct) {
        const review = singleProduct.reviews.find(review => review.id == reviewId);
        if (review) {
            res.json(review)
        } else {
            res.status(404).send("Product found, but review doesn't exist");
        }
    } else {
        res.status(404).send("Product Doesn't exist");
    }
})

// route to implement Query Param
app.get('/myProducts', (req, res) => {
    const { search, limit } = req.query; // object de-structuring
    let filteredProducts = products;

    if (search) {
        filteredProducts = filteredProducts.filter(prod => {
            return JSON.stringify(prod.description).includes(search)
        })
    }
    if (limit) {
        filteredProducts = filteredProducts.slice(0, parseInt(limit));
    }
    if (!filteredProducts.length) {
        res.status(204).json({ success: true, data: [] });
    }
    res.status(200).json({ success: true, items: filteredProducts.length, data: filteredProducts });
    console.log(products.length, filteredProducts.length)
})

app.get('*', (req, res) => {
    res.send('Sorry, This is an invalid URL');
})


app.listen(5000, () => {
    console.log('server running at port 5000');
});