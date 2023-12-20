import React from 'react';

function IngredientCard({ingredient}) {
  return(
    <div>
        <h2>{ingredient.name}</h2>
    </div>
  );
}

export default IngredientCard;