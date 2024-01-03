import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IngredientCard from './IngredientCard';
import RecipeCard from './RecipeCard';
import Search from './Search';
import Cookbook from './Cookbook';

function Ingredient() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const handleSearch = async (searchTerm) => {
    let apikey = '76539e4840cf430da3c11786bf18ecbe';

    try {
      let res = await axios.get(
        `https://api.spoonacular.com/food/ingredients/search?query=${searchTerm}&number=10&sort=calories&sortDirection=desc&apiKey=` + apikey
      );

      let ingredientData = res.data.results;
      setIngredients(ingredientData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClick = (ingredient) => {
    setSelectedIngredients([...selectedIngredients, ingredient]);
  };

  const handleRemoveIngredient = (ingredientToRemove) => {
    const updatedIngredients = selectedIngredients.filter(
      (ingredient) => ingredient.id !== ingredientToRemove.id
    );
    setSelectedIngredients(updatedIngredients);
  };

  const handleSaveRecipeToCookbook = (ingredients, quantities) => {
    // Create an object representing the saved recipe
    const newRecipe = {
      ingredients,
      quantities,
      units: Object.fromEntries(Object.keys(quantities).map(id => [id, 'grams'])),
    };

    // Update the saved recipes state
    setSavedRecipes([...savedRecipes, newRecipe]);
  };

  useEffect(() => {
    // Initial load with a default search term
    handleSearch('');
  }, []); // Empty dependency array to run once on mount

  const ingredientData = ingredients.map((ingredient) => (
    <IngredientCard
      key={ingredient.id}
      ingredient={ingredient}
      onClick={() => handleClick(ingredient)}
    />
  ));

  return (
    <div>
      {/* Render the Search component */}
      <Search onSearch={handleSearch} />
      {ingredientData}
      {/* Render the RecipeCard with selected ingredients and onSaveRecipe callback */}
      <RecipeCard
        selectedIngredients={selectedIngredients}
        onRemoveIngredient={handleRemoveIngredient}
        onSaveRecipeToCookbook={handleSaveRecipeToCookbook}
      />
      {/* Render the Cookbook component with saved recipes */}
      <Cookbook savedRecipes={savedRecipes} />
    </div>
  );
}

export default Ingredient;
