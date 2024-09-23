const express = require('express');
const { getAllToDos } = require('../controllers/todo_controller');
const { myError } = require('../middlewares/MyErrorHandler');

const todoRouter = express.Router();

todoRouter.get('/', myError, getAllToDos)

module.exports = todoRouter;