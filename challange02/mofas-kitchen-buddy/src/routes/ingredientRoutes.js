const express = require('express');
const Ingredient = require('../models/ingredientModel.js'); 
const router = express.Router();

// GET /ingredients - Fetch all available ingredients
router.get('/ingredients', async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /ingredients - Add a new ingredient
router.post('/ingredients', async (req, res) => {
  const { name, quantity, unit, category } = req.body;
  const newIngredient = new Ingredient({
    name,
    quantity,
    unit,
    category
  });

  try {
    const savedIngredient = await newIngredient.save();
    res.status(201).json(savedIngredient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /ingredients/{id} - Update an ingredient's details
router.put('/ingredients/:id', async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(
      id,
      { quantity },
      { new: true }
    );
    if (!updatedIngredient) {
      return res.status(404).json({ message: 'Ingredient not found' });
    }
    res.json(updatedIngredient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /ingredients/{id} - Remove an ingredient
router.delete('/ingredients/:id', async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletedIngredient = await Ingredient.findByIdAndDelete(id);
    if (!deletedIngredient) {
      return res.status(404).json({ message: 'Ingredient not found' });
    }
    res.json({ message: 'Ingredient deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
