import { createContext, useState, useEffect, useReducer, useRef } from "react";
// import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
// import IngredientCard from '../components/IngredientCard';
// import Search from '../components/Search';
import { appReducer, INITIAL_RECIPE_STATE } from '../store/appReducer';
// import Quantity from '../components/Quantity';
// import Unit from '../components/Unit';

const appContext = createContext({});


export const AppProvider = ({ children }) => {

    const textRef = useRef();
    const [ingredients, setIngredients] = useState([]);
    const [state, dispatch] = useReducer(appReducer, INITIAL_RECIPE_STATE);
    // const [ingredient, setIngredient] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const searchTerm = textRef.current.value;
        handleSearch(searchTerm);
    
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

    const quantity = state.quantity;
    const ingredientsList = ingredients;

    const handleIngredientSelect = (selectedIngredient, index) => {
    dispatch({ 
            type: 'addIngredient', 
            payload: { ...selectedIngredient, index } 
        });
    };

    const handleQuantityIncrease = () => {
        dispatch({type:'increaseIngredientQuantity'});
      };
    
    const handleQuantityDecrease = () => {
        dispatch({type:'decreaseIngredientQuantity'});
      };

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        dispatch({
            type: 'changeUnit',
            payload: selectedValue,
        });
    };

    // 
    

    console.log(state);

    console.log(ingredientsList);

    return (
        <appContext.Provider value={{
            handleSubmit, handleSearch,
            handleIngredientSelect, ingredientsList,
            handleQuantityIncrease, handleQuantityDecrease, quantity,
            handleSelectChange

        }}>
            {children}
        </appContext.Provider>
    )
}

export default appContext;