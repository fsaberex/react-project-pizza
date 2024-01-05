import React from 'react';


function IngredientCard({ ingredient, quantity, quantities, onValueIncrease, onValueDecrease, onUnitChange, onClick }) {

  return (
    <div>
      <div id="ingredient">
        <p>
        {ingredient.name}
        </p>
      </div>
      {/* <input
        type="number"
        value={quantities}
        onChange = {onValueChange}
        placeholder="Quantity"
        id="quantity"
      /> */}
      <div>
        <button onClick={onValueDecrease}>decrease</button>
        <button onClick={onValueIncrease}>increase</button>
        <span>Quantity ({quantity})</span>
      </div>

      <div>
        <select name="unit">
          <option onChange={onUnitChange} value="grams">grams</option>
          <option onChange={onUnitChange} value="pieces">pieces</option>
          {/* Add other unit options as needed */}
        </select>
      </div>
      
      <div>
        <button onClick={onClick}>Add to Recipe</button>
      </div>
      
    </div>
  );
}

export default IngredientCard;
