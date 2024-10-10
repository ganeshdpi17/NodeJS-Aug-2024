const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    _id: { type: Number},
    eId: { type: Number},
    name: { type: String },
    sal: { type: Number},
    gender: { type: String }
});

const employeeModel = mongoose.model("employees", employeeSchema);

module.exports = employeeModel;
