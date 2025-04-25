# Task Manager API

A simple RESTful API for managing tasks, built with Node.js, Express, and MongoDB.

## Features

- Create, read, update, and delete tasks
- Store tasks in MongoDB database
- RESTful design principles
- JSON data format

## Project Structure

```
task-manager-api/
├── controllers/
│   └── taskController.js
├── models/
│   └── Task.js
├── routes/
│   └── taskRoutes.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation

## Installation

1. Clone the repository
   ```
   git clone https://github.com/your-username/task-manager-api.git
   cd task-manager-api
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     ```

4. Start the development server
   ```
   npm run dev
   ```

## API Reference

### Tasks

| Endpoint | Method | Description | Request Body | Response |
|----------|--------|-------------|-------------|----------|
| `/api/tasks` | GET | Get all tasks | - | Array of task objects |
| `/api/tasks` | POST | Create a new task | `{title, description}` | Created task object |
| `/api/tasks/:id` | GET | Get a specific task | - | Task object |
| `/api/tasks/:id` | PUT | Update a task | `{title, description, completed}` | Updated task object |
| `/api/tasks/:id` | DELETE | Delete a task | - | Success message |

### Examples

#### Create a task
```
POST /api/tasks
Content-Type: application/json

{
  "title": "Learn Node.js",
  "description": "Complete Node.js course on Udemy"
}
```

#### Update a task
```
PUT /api/tasks/60d21b4667d0d8992e610c85
Content-Type: application/json

{
  "completed": true
}
```

## Testing the API

You can test the API using tools like:
- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- cURL commands
- The browser (for GET requests)

## Error Handling

The API returns appropriate HTTP status codes:

- `200` - Success
- `201` - Resource created
- `400` - Bad request
- `404` - Resource not found
- `500` - Server error

## Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Future Enhancements

- User authentication and authorization
- Task categories and tags
- Due dates and reminders
- Task priorities
- Pagination for task listing
- Search functionality

## License

This project is licensed under the MIT License.
