export const INITIAL_RECIPE_STATE = {
    ingredients: [],
    quantity: 0,
    unit: 'grams',
    recipeName: ''
}

export const appReducer = (state, action) => {

    switch (action.type) {

        case 'addIngredient':
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload],
            };

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

        default:
            return state;
    }

}