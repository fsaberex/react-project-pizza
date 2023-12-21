import './App.css';
import FoodJoke from './components/FoodJoke';
import Ingredient from './components/Ingredient';
import Search from './components/Search';
// import IngredientCard from './components/IngredientCard';]


function App() {

  

  return (
    <div className="App-header">
      <h1>Cookbook Creator</h1>
      <div>
        <p><FoodJoke /></p>
      </div>
      <div>
        <Ingredient />
      </div>
      <div>
        <Search />
      </div>

      {/* <IngredientCard /> */}

    </div>
  );
}

export default App;
