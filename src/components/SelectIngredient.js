import React, { useReducer } from 'react';
import IngredientCard from './IngredientCard';
import { appReducer, INITIAL_RECIPE_STATE } from '../store/appReducer';

function SelectIngredient({ ingredients }) {

  const [state, dispatch] = useReducer(appReducer, INITIAL_RECIPE_STATE);

  const handleIngredientSelect = (selectedIngredient, index) => {
    dispatch({ type: 'addIngredient', payload: { ...selectedIngredient, index } });
  };

  console.log(state);
  

  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <IngredientCard
          key={ingredient.id}
          ingredient={ingredient}
          onClick={() => handleIngredientSelect(ingredient, index)}
        />
      ))}
    </div>
  );
}

export default SelectIngredient