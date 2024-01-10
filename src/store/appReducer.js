export const INITIAL_RECIPE_STATE = {
    searchedFor: {
        term: null,
        results: [] //
    },
    // selectedIngredient: null, //is an ingredient object 
            // { //recipe object looks like
        //     qty: Number,
        //     unit: cups/ts/grams/etc.,
        //     ingredients: [
        //         {id, name, picture}
        //     ]
        // }
    selectedIngredient: {
        ingredient: null,
        quantity: null,
        unitOfMeasure: null
    },
    ingredients: [], //made up of ingredient objects
    recipe: null, 
    // {
    //     name:,
    //     steps:, 
    //     ingredients: [] //pushed from ingredients
    // }
    cookbookName: '',
    cookbookRecipes: [
        // {recipeOBjects}
    ] 
}

export const appReducer = (state, action) => {
    let newState = {...state};
    let {type,payload} = action;

    switch (type) {
        case 'searchResults':
            newState.searchedFor = {
                term: payload.term,
                results: payload.results
            }
            console.log(newState);
            break;
        case 'ingredientToAdd':
            // newState.selectedIngredient = payload;
            newState.selectedIngredient = {ingredient: payload}
            console.log(payload)
            break;
        case 'editIngredient':
            newState.selectedIngredient = {
                ingredient: newState.selectedIngredient,
                quantity: payload.quantity,
                unitOfMeasure: payload.unitOfMeasure
            }
            console.log(newState);
            break;
        // case 'addIngredient':
        //     return {
        //         ...state,
        //         ingredient: [...state.ingredient, action.payload]
        //     };
        
        // case 'addIngredientToRecipe':
        //     return {
        //         ...state,
        //         selectedIngredient: [...state.ingredient.name, ]

        //     }

        // case 'increaseIngredientQuantity':
        //     return {
        //         ...state,
        //         quantity: state.quantity +1
        //     };

        // case 'decreaseIngredientQuantity':
        //     return {
        //         ...state,
        //         quantity: state.quantity -1
        //     };

        // case 'changeUnit':
        //     return {
        //         ...state,
        //         unit: action.payload
        //     };

        // case 'addRecipeName':
        //     return {
        //         ...state,

        //     };
        
        // case 'addRecipeSteps':
        //     return {
        //         ...state,
    
        //     };
        
        // case 'addCookbookName':
        //     return {
        //         ...state,
    
        //     };
        
        // case 'addRecipe':
        //     return {
        //         ...state,
    
        //     };

        default:
            break;
    }
    return newState

}