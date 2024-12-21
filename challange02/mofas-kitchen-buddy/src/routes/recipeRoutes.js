const fs = require('fs');
const mongoose = require('mongoose');

// MongoDB Schema for Recipes
const recipeSchema = new mongoose.Schema({
  recipeName: { type: String, required: true },
  ingredients: [String],
  metadata: {
    taste: String,
    cuisine_type: String,
    prep_time: String,
    reviews: Number,
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// Function to Parse the Recipe File
function parseRecipeFile(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  const recipes = [];

  // Regex patterns for extracting recipe details
  const recipePattern = /Recipe Name: (.*?)\n.*?Ingredients:\n([\s\S]*?)\nMetadata:\n([\s\S]*?)\n/g;
  let match;

  while ((match = recipePattern.exec(data)) !== null) {
    const recipeName = match[1];
    const ingredients = match[2].split('\n').map(ingredient => ingredient.trim()).filter(Boolean);
    const metadata = match[3].split('\n').reduce((metadataObj, line) => {
      const [key, value] = line.split(':');
      if (key && value) metadataObj[key.trim()] = value.trim();
      return metadataObj;
    }, {});

    recipes.push({ recipeName, ingredients, metadata });
  }

  return recipes;
}

// Function to Save Recipes to MongoDB
async function saveRecipesToDB(recipes) {
  try {
    await mongoose.connect('your-mongo-atlas-url', { useNewUrlParser: true, useUnifiedTopology: true });
    for (const recipe of recipes) {
      const newRecipe = new Recipe(recipe);
      await newRecipe.save();
    }
    console.log('Recipes saved successfully!');
  } catch (err) {
    console.error('Error saving recipes to database:', err);
  } finally {
    mongoose.connection.close();
  }
}

// Main execution: Parse and save recipes
const recipes = parseRecipeFile('my_fav_recipes.txt');
saveRecipesToDB(recipes);
