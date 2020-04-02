import React from 'react';
import './cart.icon.style.scss';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from './../../assest/shopping-bag.svg';
import { toggleCart } from './../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
const CartIcon = ({ toggleCart, itemCount }) => (
    <div className="cart-icon" onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon' />
        <div className='item-count'>{itemCount}</div>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);