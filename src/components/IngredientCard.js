import React, { useContext } from 'react';
import appContext from '../store/appContext';
import NewAppContext from '../store/newAppContext';


function IngredientCard({ ingredient }) {

  const {dispatch} = useContext(NewAppContext);

  return (
    <div>
      <div id="ingredient">
        <p>{ingredient.name}</p>
      </div>
      <div>
        <button onClick={() => {dispatch({type: 'ingredientToAdd', payload: ingredient})}}>Add to Recipe</button>
      </div>
      
    </div>
  );
}

export default IngredientCard;
