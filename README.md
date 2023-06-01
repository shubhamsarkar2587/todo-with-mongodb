# Todo-with-MongoDB

A backend Todo application created with Node.js, Express, MongoDB, and Mongoose.

## Introduction

This project is a backend Todo application built with Node.js, Express, MongoDB, and Mongoose. It allows users to manage their tasks by providing various API endpoints for creating, reading, updating, and deleting or CRUD Todo tasks.

## Features

- Create a new Todo task
- Retrieve a list of all Todo tasks
- Retrieve a single Todo task by ID
- Update a Todo task
- Delete a Todo task

## Prerequisites

Before running the application, make sure you have the following software installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:
git clone `https://github.com/shubhamsarkar2587/todo-with-mongodb.git`

2. Install the dependencies:
`npm install`

3. Set up the MongoDB connection:

   - Create a MongoDB database.
   - Update the MongoDB connection URL in the `.env` file with your database information.
    `mongodb+srv://myuser:mypassword@mycluster.mongodb.net/mydatabase?retryWrites=true&w=majority`

4. Start the application:
`npm start`

## Usage

Once the application is running, you can use a REST API client to interact with the following endpoints:

- `GET /todos`: Get a list of all Todo tasks.
- `GET /todos/:id`: Get a single Todo task by ID.
- `POST /todos`: Create a new Todo task.
- `PUT /todos/:id`: Update a Todo task by ID.
- `DELETE /todos/:id`: Delete a Todo task by ID.

Make sure to include the necessary request headers and parameters as specified in the API documentation.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the functionality of this application, feel free to open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
