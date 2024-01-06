import React from 'react';


function IngredientCard({ ingredient, onClick }) {

  return (
    <div>
      <div id="ingredient">
        <p>
        {ingredient.name}
        </p>
      </div>
      <div>
        <button onClick={onClick}>Add to Recipe</button>
      </div>
      
    </div>
  );
}

export default IngredientCard;
