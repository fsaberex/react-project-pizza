import './App.css';
// import FoodJoke from './components/FoodJoke';
import Ingredient from './components/Ingredient';
// import Search from './components/Search';
// import IngredientCard from './components/IngredientCard';

function App() {
  return (
    <div className="App-header">
      Cookbook Creator
      {/* <FoodJoke /> */}
      <Ingredient />
      <input type = "search"/>
      {/* <Search details={}/> */}
      {/* <IngredientCard /> */}
    </div>
  );
}

export default App;
