import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5000', // Default origin if not defined
  credentials: true, // Corrected typo
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '26kb' }));
app.use(express.urlencoded({ extended: true, limit: '26kb' }));
app.use(express.static('public'));
app.use( cookieParser() );




//  routes
import userRouter from './routes/user.routes.js';


//  routes declaration
app.use("/api/v1/users", userRouter)

app.post('/api/v1/users/register', (req, res) => {
    // Handle registration logic here
    res.json({
        message: 'User registered',
        body: req.body,
        files: req.files
    });
});

app.get( '/', ( req, res ) => {
  res.send("hello world")
})








export { app };
