import cartActionTypes from './cart.types';

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const toggleCart = () => ({
    type: cartActionTypes.TOGGLE_CART
})
export const clearItemFromCart = (item) => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItem = (item) => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})