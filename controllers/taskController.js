const Task = require('../models/Task');

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    // Add query parameters for filtering
    const filter = {};
    
    // Filter by completion status if specified
    if (req.query.completed) {
      filter.completed = req.query.completed === 'true';
    }
    
    // Filter by priority if specified
    if (req.query.priority) {
      filter.priority = req.query.priority;
    }
    
    // Add sorting - newest first by default
    const sort = req.query.sort || '-createdAt';
    
    const tasks = await Task.find(filter).sort(sort);
    
    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch tasks',
      error: error.message 
    });
  }
};

// Get single task
exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    
    if (!task) {
      return res.status(404).json({ 
        success: false,
        message: 'Task not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch task',
      error: error.message 
    });
  }
};

// Create task
exports.createTask = async (req, res) => {
  try {
    // Validate required fields
    if (!req.body.title) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a title for the task'
      });
    }
    
    const task = await Task.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: task
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Failed to create task',
      error: error.message 
    });
  }
};

// Update task
exports.updateTask = async (req, res) => {
  try {
    // Find and update the task
    const task = await Task.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { 
        new: true, // Return the updated document
        runValidators: true // Run mongoose validators
      }
    );
    
    if (!task) {
      return res.status(404).json({ 
        success: false,
        message: 'Task not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: task
    });
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Failed to update task',
      error: error.message 
    });
  }
};

// Delete task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    
    if (!task) {
      return res.status(404).json({ 
        success: false,
        message: 'Task not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
      data: {}
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Failed to delete task',
      error: error.message 
    });
  }
};

// Additional functionality - Toggle completion status
exports.toggleCompleted = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    
    if (!task) {
      return res.status(404).json({ 
        success: false,
        message: 'Task not found' 
      });
    }
    
    // Toggle the completed status
    task.completed = !task.completed;
    await task.save();
    
    res.status(200).json({
      success: true,
      message: `Task marked as ${task.completed ? 'completed' : 'incomplete'}`,
      data: task
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Failed to toggle task status',
      error: error.message 
    });
  }
};