const express = require('express');
const { getEmployees, getEmployeeById, addEmployee } =
    require('../controllers/employee_controller');
const { logTime } = require('../middlewares/logger');
const { sayHi } = require('../middlewares/sayHi');

const employeeRouter = express.Router();
// employeeRouter.use(logTime);

employeeRouter.get('/', logTime, sayHi, getEmployees)
employeeRouter.get('/:id', getEmployeeById)
employeeRouter.post('/', addEmployee)

module.exports = employeeRouter;