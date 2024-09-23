const fs = require('fs');

exports.logTime = (req, res, next) => {
    console.log('I am Logger Middleware')
    fs.appendFileSync('api_usage.txt', `${req.method} Operation on ${req.url} was fired at ${new Date().toLocaleTimeString()}\n`)
    next();
}