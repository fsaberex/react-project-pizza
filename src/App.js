import './App.css';
//import FoodJoke from './components/FoodJoke';
import Ingredient from './components/Ingredient';
import { appReducer } from './store/appReducer';
import React, { useReducer } from 'react';
import Cookbook from './components/Cookbook';


function App() {

  const savedCookbook = [];

  const [state, dispatch] = useReducer(appReducer, savedCookbook);

  return (
    <div className="App-header">
      <h1>Cookbook Creator</h1>
      {/* <div>
        <FoodJoke />
      </div> */}
      <div>
        <Ingredient />
      </div>
      <div>
      <Cookbook savedRecipes={state.savedRecipes} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
