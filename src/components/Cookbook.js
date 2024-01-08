// import React, { useReducer } from 'react';
// import { appReducer } from '../store/appReducer';

const Cookbook = ({ savedRecipes, dispatch }) => {
  return (
    <div>
      <h2>Cookbook</h2>
      {savedRecipes && savedRecipes.length > 0 ? (
        savedRecipes.map((recipe, index) => (
          <div key={index}>
            <h3>Recipe {index + 1}</h3>
            <ul>
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>
                  {ingredient.name}: {recipe.quantities[ingredient.id]}{' '}
                  {recipe.units[ingredient.id]}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No recipes saved yet.</p>
      )}
    </div>
  );
};

export default Cookbook;
