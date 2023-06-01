const express = require('express');
const { getAllTodos, createTodo, getTodoById, deleteTodoById } = require('../controllers/todo.controller');

const router = express.Router();

router.get('/', getAllTodos).put('/', createTodo);
router.get('/:id', getTodoById).delete('/:id', deleteTodoById);

module.exports = router;
