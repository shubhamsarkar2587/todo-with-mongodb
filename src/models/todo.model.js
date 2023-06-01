const mongoose = require('mongoose');

// Define the Todo schema
const todoSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true,
		default: ''
	},
	completed: {
		type: Boolean,
		default: false
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

// Create the Todo model
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
