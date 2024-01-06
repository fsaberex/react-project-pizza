import React from 'react';


function Quantity({ quantity, onValueIncrease, onValueDecrease}) {

  return (
    <div>
      <div id="Quantity">
        <button onClick={onValueDecrease}>decrease</button>
        <button onClick={onValueIncrease}>increase</button>
        <span>Quantity ({quantity})</span>
      </div>
    </div>
  );
}

export default Quantity;
