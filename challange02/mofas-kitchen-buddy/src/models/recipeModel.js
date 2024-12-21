const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  taste: { type: String, required: true },
  cuisine_type: { type: String, required: true },
  prep_time: { type: String, required: true },
  reviews: { type: Number, required: true },
  ingredients: { type: mongoose.Schema.Types.Mixed, required: true } // JSON or Text format
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
