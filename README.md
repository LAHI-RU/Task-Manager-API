# Task Manager API

A simple REST API for managing tasks built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete tasks
- Store tasks in MongoDB database
- RESTful architecture

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone this repository
   ```
   git clone https://github.com/yourusername/task-manager-api.git
   ```

2. Install dependencies
   ```
   cd task-manager-api
   npm install
   ```

3. Create a `.env` file in the root directory
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server
   ```
   npm run dev
   ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create a new task |
| GET | /api/tasks/:id | Get a specific task by ID |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

## Request Examples

### Create a task
```
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the task manager API project"
}
```

### Update a task
```
PUT /api/tasks/60d21b4667d0d8992e610c85
Content-Type: application/json

{
  "completed": true
}
```

## License

MIT

## Author

LAHIRU
