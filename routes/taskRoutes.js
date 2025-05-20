const express = require('express');
const router = express.Router();
const { 
  getAllTasks, 
  getTask, 
  createTask, 
  updateTask, 
  deleteTask,
  toggleCompleted
} = require('../controllers/taskController');

// Routes for /api/tasks
router.route('/')
  .get(getAllTasks)
  .post(createTask);

// Routes for /api/tasks/:id
router.route('/:id')
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask);

// New route for toggling completion status
router.route('/:id/toggle')
  .patch(toggleCompleted);

module.exports = router;