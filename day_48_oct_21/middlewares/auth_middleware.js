const jsonwebtoken = require('jsonwebtoken');
const JWT_KEY = require('../config/JWT_SECRET_KEY');

module.exports.authMiddleware = function (req, res, next) {
    let token = req.headers['my-token'];
    if (!token) {
        res.status(401).send({ status: 'fail', msg: 'No token' })
    }
    try {
        let user = jsonwebtoken.verify(token, JWT_KEY);
        req.user = user;
        next();
    } catch (err) {
        res.status(401).send({ status: 'fail', msg: 'wrong token' })
    }
}