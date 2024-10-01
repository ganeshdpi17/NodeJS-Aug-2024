const { getDB } = require("../util/mongoUtil");

exports.getEmployees = async (req, res) => {
    const employeeCollection = getDB().collection('employees');
    const allEmployees = await employeeCollection.find({}).toArray();
    if (allEmployees.length) {
        res.json(allEmployees);
    } else {
        res.status(204).send([]);
    }
}
exports.getEmployeeById = async (req, res) => {
    const employeeCollection = getDB().collection('employees');
    const employeeData = await employeeCollection.find({ eId: +req.params.id }).toArray();
    if (employeeData.length) {
        res.json(employeeData[0]);
    } else {
        res.status(204).send({});
    }
}
exports.addEmployee = async (req, res) => {
    const employeeCollection = getDB().collection('employees');
    try {
        await employeeCollection.insertOne(req.body);
        res.status(201).send('Employee Created Successfully');
    } catch (err) {
        res.status(400).send('Employee add failed');
    }
}