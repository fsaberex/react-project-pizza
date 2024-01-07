import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SelectIngredient from './SelectIngredient';

function Search() {
  const textRef = useRef();
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchTerm = textRef.current.value;
    handleSearch(searchTerm);

    // Clear the input field after submitting the search
    textRef.current.value = '';
  };

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

  useEffect(() => {
    handleSearch('');
  }, []);


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" ref={textRef} />
        <button type="submit">Submit</button>
      </form>
      <SelectIngredient ingredients={ingredients} />

    </div>
  );
}

export default Search;
