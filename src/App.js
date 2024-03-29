import React, { useReducer } from 'react';
import './App.css';
//import FoodJoke from './components/FoodJoke';
import Ingredient from './components/Ingredient';
import Recipe from './components/Recipe';
import Cookbook from './components/Cookbook';
import Search from './components/Search';
import SelectIngredient from './components/SelectIngredient';
//import Quantity from './components/Quantity';
import EditIngredientForm from './components/EditIngredientForm';
import { Route, Routes, Link } from 'react-router-dom';
import { INITIAL_RECIPE_STATE, appReducer } from './store/appReducer';
//import { AppProvider } from './store/appContext';
//import Unit from './components/Unit';
import NewAppContext from './store/newAppContext';

function App() {

  // const savedCookbook = [];
  // const [state, dispatch] = useReducer(appReducer, savedCookbook);
  
  const [store, dispatch] = useReducer(appReducer, INITIAL_RECIPE_STATE);


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
        <NewAppContext.Provider value={{store,dispatch}}>
        {/* <AppProvider> */}
          <Search />
          <SelectIngredient />
          <Ingredient />
          {store.selectedIngredient ? <EditIngredientForm /> : null}
          {/* <Quantity />
          <Unit /> */}
          <Recipe />
          <Routes>
            <Route path="/MyCookbook" element={<Cookbook/>}>
              Cookbook
            </Route>
          </Routes>
          {/* <FoodJoke /> */}
        {/* </AppProvider> */}
        </NewAppContext.Provider>
        
      </div>
  );
}

export default App;
