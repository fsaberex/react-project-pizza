import React, { useState } from 'react';
import { appContext } from '../store/appContext';

function RecipeCard({ selectedIngredients }) {


  return (
    <div>
      <h2>Recipe Card</h2>
      <ul>
        {selectedIngredients && selectedIngredients.length > 0 ? (
          selectedIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name}{' '}
            </li>
          ))
        ) : (
          <p>No ingredients selected yet.</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeCard;