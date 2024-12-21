// server.js
const express = require('express');
const dotenv = require('dotenv');

// Initialize dotenv to load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, Kitchen Buddy!');
});

// Example of a port from environment variables (default to 3000)
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
