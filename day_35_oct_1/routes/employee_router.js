const express = require('express');
const { getEmployees, getEmployeeById, addEmployee } = require('../controllers/employee_controller');

const employeeRouter = express.Router();

employeeRouter.get('/', getEmployees)
employeeRouter.get('/:id', getEmployeeById)
employeeRouter.post('/', addEmployee)

module.exports = employeeRouter;