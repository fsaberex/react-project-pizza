import { createContext, useReducer } from "react";
// import { createContext, useState, useEffect, useReducer, useRef } from "react";
// import { Route, Switch, useHistory } from 'react-router-dom';
// import axios from 'axios';
// import IngredientCard from '../components/IngredientCard';
// import Search from '../components/Search';
import { appReducer, INITIAL_RECIPE_STATE } from '../store/appReducer';
// import Quantity from '../components/Quantity';
// import Unit from '../components/Unit';

const appContext = createContext({});


export const AppProvider = ({ children }) => {

    // const textRef = useRef();
    // const [ingredients, setIngredients] = useState([]);
    const [store, dispatch] = useReducer(appReducer, INITIAL_RECIPE_STATE);
    // const [ingredient, setIngredient] = useState(false);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    
    //     const searchTerm = textRef.current.value;
    //     handleSearch(searchTerm);
    
    //     textRef.current.value = '';s
    //   };


    
    // useEffect(() => {
    //     handleSearch('');
    // }, []);

    // const handleIngredientSelect = (selectedIngredient, index) => {
    // dispatch({ 
    //         type: 'addIngredient', 
    //         payload: { ...selectedIngredient, index } 
    //     });
    // };

    // const handleQuantityIncrease = () => {
    //     dispatch({type:'increaseIngredientQuantity'});
    //   };
    
    // const handleQuantityDecrease = () => {
    //     dispatch({type:'decreaseIngredientQuantity'});
    //   };

    // const handleSelectChange = (e) => {
    //     const selectedValue = e.target.value;
    //     dispatch({
    //         type: 'changeUnit',
    //         payload: selectedValue,
    //     });
    // };

    // 
    

    return (
        <appContext.Provider value={{
            // handleSubmit, handleSearch,
            // handleIngredientSelect, ingredientsList,
            // handleQuantityIncrease, handleQuantityDecrease, quantity,
            // handleSelectChange,
            store, dispatch

        }}>
            {children}
        </appContext.Provider>
    )
}

export default appContext;