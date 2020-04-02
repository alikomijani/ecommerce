import cartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils.js';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state

    }
}
export default cartReducer;