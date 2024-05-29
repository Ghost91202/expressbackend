import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';

// Load environment variables from .env file
dotenv.config({ path: './.env' }); // Ensure the correct path to your .env file

// Create an Express application

// Define the port, using an environment variable if available
const port = process.env.PORT || 5000; // Default to 5000 if PORT is not defined

// Connect to MongoDB and start the server
connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((err) => {
        console.log("mongodb connection failed !!! ", err);
    });
