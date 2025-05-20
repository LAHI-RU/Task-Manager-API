const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Determine if using Atlas or local MongoDB
const isAtlasURI = process.env.MONGO_URI.includes('mongodb+srv');
console.log(`Attempting to connect to ${isAtlasURI ? 'MongoDB Atlas' : 'local MongoDB'}`);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds
})
.then(() => {
  console.log('💾 MongoDB Connected successfully');
})
.catch(err => {
  console.error('❌ MongoDB Connection Error:', err);
  
  if (isAtlasURI) {
    console.log('\n🔍 Troubleshooting Atlas connection:');
    console.log('1. Check if your IP is whitelisted in MongoDB Atlas');
    console.log('2. Verify username and password are correct');
    console.log('3. Try switching to local MongoDB by updating your .env file:\n');
    console.log('   MONGO_URI=mongodb://localhost:27017/taskmanager\n');
  } else {
    console.log('\n🔍 Troubleshooting local MongoDB connection:');
    console.log('1. Make sure MongoDB is installed and running');
    console.log('2. Check if MongoDB service is started:');
    console.log('   - Run "net start MongoDB" in Command Prompt as Administrator');
    console.log('3. Verify MongoDB is listening on default port 27017\n');
  }
});

// Import routes
const taskRoutes = require('./routes/taskRoutes');

// Basic route
app.get('/', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'Welcome to the Task Manager API',
    version: '1.0.0'
  });
});

// Mount routes
app.use('/api/tasks', taskRoutes);

// Set port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});