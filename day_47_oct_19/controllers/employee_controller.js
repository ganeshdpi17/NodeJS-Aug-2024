const employeeModel = require("../models/employee_model");

exports.getEmployees = async (req, res) => {
    const allEmployees = await employeeModel.find({});
    if (allEmployees.length) {
        res.json(allEmployees);
    } else {
        res.status(204).send([]);
    }
}
exports.getEmployeeById = async (req, res) => {
    const employeeData = await employeeModel.findOne({ eId: +req.params.id });
    if (employeeData) {
        res.json(employeeData);
    } else {
        res.status(204).send({});
    }
}
