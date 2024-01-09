import React, { useRef, useContext } from 'react';
import appContext from '../store/appContext';
import axios from 'axios';
import NewAppContext from '../store/newAppContext';

function Search() {
  const textRef = useRef();
  // const { handleSearch } = useContext(appContext);
  const {dispatch} = useContext(NewAppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchTerm = textRef.current.value;

      let apikey = '76539e4840cf430da3c11786bf18ecbe';
  
      try {
        let res = await axios.get(
          `https://api.spoonacular.com/food/ingredients/search?query=${searchTerm}&number=10&sort=calories&sortDirection=desc&apiKey=` + apikey
        );
  
        let ingredientData = res.data.results;
        // setIngredients(ingredientData);
        dispatch({type: 'searchResults', payload: {term: searchTerm, results: ingredientData}})
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  
      textRef.current.value = '';
    };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" ref={textRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Search;
