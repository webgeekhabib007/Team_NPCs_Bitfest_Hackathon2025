# Mofa’s Kitchen Buddy

Mofa’s Kitchen Buddy is a backend system powered by a Large Language Model (LLM) that helps Mofa manage his ingredients, suggest recipes based on what he has at home, and provides a chatbot for personalized recipe recommendations. Mofa can input the available ingredients in his house, update them when shopping, and get suggestions for dishes based on his cravings or preferences (e.g., sweet dishes or specific cuisines).

This project aims to streamline Mofa’s kitchen by creating a user-friendly recipe and ingredient management system.

## Table of Contents

- [Overview](#overview)
- [Problem Definition](#problem-definition)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Chatbot Integration](#chatbot-integration)
- [Database Design](#database-design)
- [Contributing](#contributing)
- [License](#license)

## Overview

Mofa loves cooking and keeps a collection of his favorite recipes from social media and saved files. He needs a backend system that can:
- Manage his ingredients.
- Suggest recipes based on available ingredients.
- Use a chatbot to recommend recipes based on his preferences and current cravings.

### Problem Definition

**Challenge 2: Mofa’s Kitchen Buddy**

Mofa loves cooking and frequently collects recipe pictures or posts from social media. He saves his favorite recipes in a dedicated folder. Mofa wants to build a backend system powered by a Large Language Model (LLM) that helps him manage his ingredients and suggests recipes based on what he has at home. He plans to input available items in his house and update them when shopping. Additionally, he envisions a chatbot that can interact with him to suggest recipes tailored to his preferences, such as craving something sweet or a specific type of dish.

### Tasks:
1. **Database Design**: 
   - Create a database schema to store available ingredients.
2. **Ingredient Management API**: 
   - Develop APIs to input available items and update them after shopping or cooking.
3. **Recipe Retrieval**: 
   - Build a system to parse and store recipe details from already saved recipe images or texts into a combined `my_fav_recipes.txt` file.
   - Develop APIs to input new favorite recipe image or text.
4. **Chatbot Integration**: 
   - Integrate an LLM-based chatbot that interacts with Mofa to understand preferences (e.g., "I want something sweet today").
   - The chatbot should process the combined recipe text file and recommend recipes based on available ingredients at home.

**Tip**: Start by implementing text-based recipe retrieval first. If you have extra time, you can enhance the project with OCR functionality to accept images as input as well!

## Features

- **Ingredient Management**: APIs to add and update ingredients in your kitchen.
- **Recipe Management**: A system to parse and store recipe details from text or images.
- **Recipe Retrieval**: A feature to suggest recipes based on available ingredients and user preferences.
- **Chatbot**: An LLM-based chatbot that understands user cravings (e.g., "I want something sweet today") and recommends recipes.

## Technologies

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing ingredients and recipes)
- **OCR (Optional)**: Tesseract.js (if implementing image-to-text functionality)
- **LLM (Large Language Model)**: GPT-based chatbot (could use OpenAI GPT or other LLM models)
- **Frontend**: HTML, CSS, JavaScript (for any user-facing interaction)
- **API for Recipes**: You can use an external API like TheMealDB to fetch recipes for integration.

## Getting Started

### Prerequisites

1. **Install Node.js and npm**: If you haven't installed them, get them from [Node.js Official Website](https://nodejs.org/).
2. **Install MongoDB**: You can install MongoDB from [MongoDB Official Website](https://www.mongodb.com/).

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/webgeekhabib007/Team_NPCs_Bitfest_Hackathon2025.git
    ```
2. **Navigate to the Project Directory**
    ```
    cd Team_NPCs_Bitfest_Hackathon2025/challange02/mofas-kitchen-buddy

    ```

3. **Install Dependencies**
    ```
    npm install
    ```
4. **Start the Application**
    ```
    npm start
    ```

The application should now be running locally at http://localhost:3000.
API Endpoints
Ingredient Management APIs
POST /ingredients: Add a new ingredient.
Body: { "name": "onion", "quantity": "2", "unit": "pieces" }
GET /ingredients: Retrieve a list of available ingredients.
PUT /ingredients/:id: Update the quantity or details of an ingredient.
DELETE /ingredients/:id: Remove an ingredient from the list.
Recipe Management APIs
POST /recipes: Add a new recipe (either as text or image).
Body: { "recipe_name": "Spaghetti", "ingredients": ["pasta", "tomato", "basil"], "instructions": "Boil pasta and mix with sauce." }
GET /recipes: Retrieve a list of stored recipes.
Chatbot Integration
The chatbot will be powered by an LLM (such as GPT). It interacts with the user to suggest recipes based on their preferences, such as:

"I want something sweet today."
"I'm craving a vegetarian dish."


**Database Design**
1. **Ingredients Schema**
        ```
        {
        "_id": ObjectId,
        "name": "tomato",
        "quantity": "4",
        "unit": "pieces"
        }

    ```
2. **Recipe Schema**

    ```
    {
  "_id": ObjectId,
  "recipe_name": "Pasta Alfredo",
  "ingredients": ["pasta", "cream", "cheese", "butter"],
  "instructions": "Boil pasta. Prepare sauce with cream and cheese. Combine."
}
```

**Contributing**
We welcome contributions from the community! If you'd like to contribute to Mofa’s Kitchen Buddy:

1.Fork this repository.
2.Create a new branch for your feature or bug fix.
3. Make your changes and test thoroughly.
4. Submit a pull request with a clear description of your changes.
License
5. This project is open-sourced software licensed under the MIT License. Feel free to use and modify it for your own projects, but please ensure to give proper attribution.