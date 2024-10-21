const express = require('express');
const { getAllEmployees, getEmplyeeById } = require('../controllers/employee_controller');
const { authMiddleware } = require('../middlewares/auth_middleware');

const employeeRouter = express.Router();
employeeRouter.get('/', authMiddleware, getAllEmployees);  // protected Route
employeeRouter.get('/:id', authMiddleware, getEmplyeeById); // protected Route

module.exports = employeeRouter;