import React from 'react';

function IngredientCard({ingredient}) {
  return(
    <div>
        <h3>{ingredient.name}</h3>
    </div>
  );
}

export default IngredientCard;