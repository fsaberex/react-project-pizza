import React, { useState, useEffect, useReducer } from 'react';
import { appReducer, INITIAL_RECIPE_STATE } from '../store/appReducer';

function Ingredient() {

  const [state, dispatch] = useReducer(appReducer, INITIAL_RECIPE_STATE);


  console.log(state);


  return (
    
    <div>
    </div>
  );
}


export default Ingredient;
