const express = require('express'); // Imports the Express framework
const app = express(); // Creates an Express application instance

const port = 4000; // Uses the `PORT` environment variable if set, otherwise defaults to 4000

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!'); // Sends the "Hello World!" response for the root path (`/`)
});

app.get('/login', (req, res) => {
  res.send('login'); // Sends the "login" response for the `/login` path
});

app.get('/signup', (req, res) => {
  res.send('signup'); // Sends the "signup" response for the `/signup` path
});

// Starts the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
