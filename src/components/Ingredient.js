import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import IngredientCard from './IngredientCard';
import Search from './Search';
import RecipeCard from './RecipeCard';
import { appReducer, INITIAL_RECIPE_STATE } from '../store/appReducer';

function Ingredient() {

  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [state, dispatch] = useReducer(appReducer, INITIAL_RECIPE_STATE);

  const handleSearch = async (searchTerm) => {
    let apikey = '76539e4840cf430da3c11786bf18ecbe';

    try {
      let res = await axios.get(
        `https://api.spoonacular.com/food/ingredients/search?query=${searchTerm}&number=10&sort=calories&sortDirection=desc&apiKey=` + apikey
      );

      let ingredientData = res.data.results;
      setIngredients(ingredientData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  };

//   const handleIngredientSelect = (ingredient) => {
//     setSelectedIngredients([...selectedIngredients, ingredient]);
//   };

  const handleIngredientSelect = (e) => {
    dispatch({type:'addIngredient'});
  };

  const handleQuantityIncrease = (e) => {
    dispatch({type:'increaseIngredientQuantity'});
  };

  const handleQuantityDecrease = (e) => {
    dispatch({type:'decreaseIngredientQuantity'});
  };

  const handleUnitChange = (e) => {
    dispatch({type:'changeUnit', payload:{name:e.target.name, value:e.target.value}});
  };

  console.log(state);

//   const handleQuantityChange = (ingredient, value) => {
//     setQuantities({
//       ...quantities,
//       [ingredient.id]: value,
//     });
//   };

// const handleUnitChange = (unit) => {
//     dispatch({type:'addUnit', payload:unit});
//   }

//   const handleQuantityChange = (value) => {
//     dispatch({type:'addQuantity', payload:value});
//   }

  useEffect(() => {
    // Initial load with a default search term
    handleSearch('');
  }, []); // Empty dependency array to run once on mount

  console.log(ingredients);

  return (
    <div>
      {/* Render the Search component */}
      <Search onSearch={handleSearch} />

      {/* Render the list of IngredientCard components */}
      {/* {ingredients.map((ingredient) => ( */}
      {ingredients.map((ingredient) => (
        <IngredientCard
          key={ingredient.id}
          ingredient={ingredient}
        //   unit = 
        //   value={quantities[ingredient.id] || ''}
        //   onClick={() => handleIngredientSelect(ingredient)}
        onClick={() => handleIngredientSelect()}
        //   onChange={(e) => handleQuantityChange(ingredient, e.target.value)}
        //   onValueChange={() => handleQuantityChange(value)}
        onValueIncrease={() => handleQuantityIncrease()}
        onValueDecrease={() => handleQuantityDecrease()}
        //   onUnitChange={() => handleUnitChange(unit)}
        onUnitChange={() => handleUnitChange()}
        quantity={state.quantity}
        />
      ))}

      {/* RecipeCard now receives selectedIngredients directly as props */}
      <RecipeCard
        selectedIngredients={selectedIngredients}
        onRemoveIngredient={(ingredientToRemove) => {
          const updatedIngredients = selectedIngredients.filter(
            (ingredient) => ingredient.id !== ingredientToRemove.id
          );
          setSelectedIngredients(updatedIngredients);
        }}
        onSaveRecipeToCookbook={(ingredients, quantities) => {
          // Handle saving the recipe to the cookbook here
          console.log('Saving recipe to cookbook:', ingredients, quantities);
        }}
      />
    </div>
  );
}


export default Ingredient;
