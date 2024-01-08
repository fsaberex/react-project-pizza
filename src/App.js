import React, { useReducer } from 'react';
import './App.css';
import FoodJoke from './components/FoodJoke';
import Ingredient from './components/Ingredient';
import Recipe from './components/Recipe';
import Cookbook from './components/Cookbook';
import Search from './components/Search';
import SelectIngredient from './components/SelectIngredient';
import Quantity from './components/Quantity';
import { Route, Routes, Link } from 'react-router-dom';
import { appReducer } from './store/appReducer';
import { AppProvider } from './store/appContext';
import Unit from './components/Unit';

function App() {

  const savedCookbook = [];
  const [state, dispatch] = useReducer(appReducer, savedCookbook);
  

  return (
      <div className="App-header">
        <>
           <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/MyCookbook">Cookbook</Link></li>
            </ul>
           </nav>
        </>
        <h1>Cookbook Creator</h1>
        <AppProvider>
          <Search />
          <SelectIngredient />
          <Ingredient />
          <Quantity />
          <Unit />
          <Recipe />
          <Routes>
            <Route path="/MyCookbook" element={<Cookbook savedRecipes={state.savedRecipes} dispatch={dispatch} />}>
              Cookbook
            </Route>
          </Routes>
          <FoodJoke />
        </AppProvider>
        
      </div>
  );
}

export default App;
