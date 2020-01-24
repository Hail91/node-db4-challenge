const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

// GET - Get list of all recipes from the database

function getRecipes() {
    return db.select('*').from('recipes');
};

function getShoppingList(recipe_id) {
    return db('recipe_ingredients as ing')
        .select('ingredients.name', 'ing.quantity')
        .where({ recipe_id })
        .join('ingredients', 'ingredients.id', 'ing.ingredient_id')
};

function getInstructions(recipe_id) {
    return db('instructions as i')
    .select('recipes.name', 'i.instruction')
    .where({ recipe_id })
    .join('recipes', 'recipes.id', 'i.recipe_id')
};

