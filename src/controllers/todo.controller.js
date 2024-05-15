const TodoSchema = require('../models/todo.model');

const getAllTodos = async (req, res) => {
	try {
		const todos = await TodoSchema.find();
		res.json({ message: 'success', todos });
	} catch (err) {
		console.log(err);
	}
};

const getTodoById = async (req, res) => {
	try {
		const todoId = req.params.id;
		const todo = await TodoSchema.findById(todoId);
		if (todo) {
			res.json({ message: 'success', todo });
		} else {
			res.status(404).json({ error: 'Todo not found' });
		}
	} catch (err) {
		console.log(err);
	}
};

const createTodo = async (req, res) => {
	try {
		console.log('ddfdf');
		const { title, description } = req.body;
		if (title && description) {
			const todo = await TodoSchema.create(req.body);
			res.status(201).json({ message: 'successfully created!', todo });
		} else {
			const errors = {};
			if (!title) {
				errors.title = 'Title is required';
			}
			if (!description) {
				errors.description = 'Description is required';
			}
			res.status(400).json({ errors });
		}
	} catch (err) {
		console.log(err);
	}
};

const updateTodoById = async (req, res) => {
	try {
		const todoId = req.params.id;
		const { title, description } = req.body;
		const updatedTodo = await TodoSchema.findByIdAndUpdate(
			todoId,
			{ title, description },
			{ new: true, runValidators: true }
		);
		if (updatedTodo) {
			res.json({ message: 'Successfully updated!', todo: updatedTodo });
		} else {
			res.status(404).json({ error: 'Todo not found' });
		}
	} catch (err) {
		console.log(err);
	}
};

const deleteTodoById = async (req, res) => {
	try {
		const todoId = req.params.id;
		const todo = await TodoSchema.findByIdAndRemove(todoId);
		if (todo) {
			res.json({ message: 'successfully deleted!', todo });
		} else {
			res.status(404).json({ error: 'Todo not found' });
		}
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getTodoById,
	getAllTodos,
	createTodo,
	updateTodoById,
	deleteTodoById
};
