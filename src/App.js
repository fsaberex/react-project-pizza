import './App.css';
import { appContext } from './store/appContext';
import FoodJoke from './components/FoodJoke';
import Ingredient from './components/Ingredient';
// import Search from './components/Search';
import { appReducer } from './components/Read';
import { useState, useReducer } from 'react';
// import IngredientCard from './components/IngredientCard';]
import RecipeCard from './components/RecipeCard';
import Cookbook from './components/Cookbook';


function App() {

  const searchResults = [];

  const [SearchTerm, setSearchTerm] = useReducer(appReducer,searchResults);

  return (
    <appContext.Provider value={{SearchTerm, setSearchTerm}}>
    <div className="App-header">
      <h1>Cookbook Creator</h1>
      {/* <div>
        <p><FoodJoke /></p>
      </div> */}
      <div>
        <Ingredient />
      </div>
      <div>
        {/* <Search /> */}
        {/* <RecipeCard /> */}
      </div>
      {/* <IngredientCard /> */}

    </div>
    </appContext.Provider>
  );
}

export default App;
