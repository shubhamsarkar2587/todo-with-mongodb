const express = require('express');
const { getAllTodos, createTodo, getTodoById, deleteTodoById, updateTodoById } = require('../controllers/todo.controller');

const router = express.Router();

router.get('/', getAllTodos).post('/', createTodo);
router.get('/:id', getTodoById).post(':/', updateTodoById).delete('/:id', deleteTodoById);

module.exports = router;
