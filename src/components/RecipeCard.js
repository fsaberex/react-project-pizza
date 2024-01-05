import React, { useState } from 'react';

const RecipeCard = ({ selectedIngredients, onRemoveIngredient, onSaveRecipeToCookbook }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (ingredient, value) => {
    setQuantities({
      ...quantities,
      [ingredient.id]: value,
    });
  };


  const handleRemoveIngredient = (ingredient) => {
    onRemoveIngredient(ingredient);
  };

  const handleSaveRecipe = () => {
    onSaveRecipeToCookbook(selectedIngredients, quantities);
    console.log(selectedIngredients);
  };

  return (
    <div>
      <h2>Recipe Card</h2>
      <ul>
        {selectedIngredients && selectedIngredients.length > 0 ? (
          selectedIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name}{' '}
              <button onClick={() => handleRemoveIngredient(ingredient)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <p>No ingredients selected yet.</p>
        )}
      </ul>
      <button onClick={handleSaveRecipe}>Save</button>
    </div>
  );
};

export default RecipeCard;