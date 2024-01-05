export const INITIAL_RECIPE_STATE = {
    ingredient: [],
    unit: '',
    quantity: 0
}

export const appReducer = (state, action) => {

    switch (action.type) {

        case 'addIngredient':
            return {
                ...state,
                ingredient: [state.ingredient]
                
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
                [action.payload.name]:action.payload.value
            };

        default:
            return state;
    }

}