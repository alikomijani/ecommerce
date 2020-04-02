import React from 'react';
import CustomButton from './../custom-button/custom-button.component';
import './cart-dropdown.style.scss';
import CartItem from './../cart-item/cart-item.component';
import { selectCartItems } from './../../redux/cart/card.selectors';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default connect(mapStateToProps)(CartDropdown);