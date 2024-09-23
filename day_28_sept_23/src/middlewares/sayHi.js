
exports.sayHi = (req, res, next) => {
    console.log('I am sayHi Middleware')
    next();
}