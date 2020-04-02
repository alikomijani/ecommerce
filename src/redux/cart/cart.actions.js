import cartActionTypes from './cart.types';

export const addItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const toggleCart = () => ({
    type: cartActionTypes.TOGGLE_CART
})