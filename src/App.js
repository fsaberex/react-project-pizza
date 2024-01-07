import React, { useReducer, useState, useEffect } from 'react';
import './App.css';
//import FoodJoke from './components/FoodJoke';
import Ingredient from './components/Ingredient';
import Recipe from './components/Recipe';
import Cookbook from './components/Cookbook';
import Search from './components/Search';
import { Route, Switch, useHistory } from 'react-router-dom';
import { appReducer } from './store/appReducer';
import { AppProvider } from './store/appContext';

function App() {

  const savedCookbook = [];
  const [state, dispatch] = useReducer(appReducer, savedCookbook);
  

  return (
      <div className="App-header">
        <h1>Cookbook Creator</h1>
        <AppProvider>
          {/* <FoodJoke /> */}
          <Search />
          <Ingredient />
          <Recipe />
          <Cookbook savedRecipes={state.savedRecipes} dispatch={dispatch} />
        </AppProvider>
        
      </div>
  );
}

export default App;
