const express = require('express');
const app = express();

app.use('/book',(req,res,next)=>{ // middlewares
    console.log('Use method called');
    res.end('Use method called')
})
app.all('/book',(req,res,next)=>{ // middlewares
    console.log('all method called')
    res.end('all method called')
})

app.listen(5000);

