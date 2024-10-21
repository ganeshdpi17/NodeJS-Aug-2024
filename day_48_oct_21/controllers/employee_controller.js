const employeeModel = require("../models/employee-model")

exports.getAllEmployees = async function (req,res) {
    try {
        const employees = await employeeModel.find({});
        if (employees.length == 0) {
            res.status(204).send({})
        }
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).send('Server error')
    }
}
exports.getEmplyeeById = async function (req,res) {
    try {
        const employees = await employeeModel.find({ eId:101 });
        console.log(employees)
        if (!employees.length) {
            res.status(404).send('employee not found')
        }
        res.status(200).json(employees[0]);
    } catch (err) {
        res.status(500).send('Server error')
    }
}
