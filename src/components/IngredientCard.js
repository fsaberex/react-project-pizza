import React, { useContext } from 'react';
//import appContext from '../store/appContext';
import NewAppContext from '../store/newAppContext';


function IngredientCard({ ingredient }) {

  const {dispatch} = useContext(NewAppContext);

  return (
    <div>
      <div id="ingredientCard">
        <p>{ingredient.name}</p>
      </div>
      <div>
        <button onClick={() => {dispatch({type: 'ingredientToAdd', payload: ingredient})}}>Select Ingredient</button>
      </div>
      
    </div>
  );
}

export default IngredientCard;
