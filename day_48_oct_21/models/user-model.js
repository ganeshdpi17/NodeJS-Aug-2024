const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: { type: 'string', require: true },
    email: { type: 'string', require: true },
    password: { type: 'string', require: true },
    phone: { type: 'string', require: true },
    role: { type: 'string', require: true },
    userToken: { type: 'string' }
});
let userModel = mongoose.model('users', userSchema);
module.exports = userModel;