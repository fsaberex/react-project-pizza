export const INITIAL_RECIPE_STATE = {
    ingredient: [],
    quantity: 1,
    unit: 'grams',
    selectedIngredient: [],
    recipeName: '',
    recipeSteps: [],
    cookbookName: '',
    cookbookRecipes: [] //recipe objects, each that has it' own value
}

export const appReducer = (state, action) => {

    switch (action.type) {

        case 'addIngredient':
            return {
                ...state,
                ingredient: [...state.ingredient, action.payload]
            };
        
        case 'addIngredientToRecipe':
            return {
                ...state,
                selectedIngredient: [...state.ingredient.name, ]

            }

        case 'increaseIngredientQuantity':
            return {
                ...state,
                quantity: state.quantity +1
            };

        case 'decreaseIngredientQuantity':
            return {
                ...state,
                quantity: state.quantity -1
            };

        case 'changeUnit':
            return {
                ...state,
                unit: action.payload
            };

        case 'addRecipeName':
            return {
                ...state,

            };
        
        case 'addRecipeSteps':
            return {
                ...state,
    
            };
        
        case 'addCookbookName':
            return {
                ...state,
    
            };
        
        case 'addRecipe':
            return {
                ...state,
    
            };

        default:
            return state;
    }

}