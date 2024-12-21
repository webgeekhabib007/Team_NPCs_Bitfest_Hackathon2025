const express = require('express');
const bodyParser = require('body-parser');
const ingredientRoutes = require('./src/routes/ingredientRoutes');
const recipeRoutes = require('./src/routes/recipeRoutes');
const chatbotRoutes = require('./src/routes/chatbotRoutes');
const dbConnection = require('./src/db/connection'); // Import MongoDB connection

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
dbConnection();

// Use routes
app.use('/ingredients', ingredientRoutes);
app.use('/recipes', recipeRoutes);
app.use('/chatbot', chatbotRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
