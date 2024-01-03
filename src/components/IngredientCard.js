import React from 'react';

function IngredientCard({ ingredient, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <h3>{ingredient.name}</h3>
    </div>
  );
}

export default IngredientCard;
