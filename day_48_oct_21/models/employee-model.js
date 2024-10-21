const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    eId: { type: 'string', require: true },
    name: { type: 'string', require: true },
    sal: { type: 'string', require: true },
    gender: { type: 'string', require: true }
});
let employeeModel = mongoose.model('employees', employeeSchema);
module.exports = employeeModel;