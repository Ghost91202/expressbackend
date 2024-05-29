import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';

// Load environment variables from .env file
dotenv.config({ path: './.env' }); // Ensure the correct path to your .env file

// Connect to MongoDB
connectDB();

// Create an Express application
const app = express();

// Define the port, using an environment variable if available
const port = process.env.PORT || 5000; // Default to 5000 if PORT is not defined

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
