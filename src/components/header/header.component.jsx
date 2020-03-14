import React from 'react';
import { Link } from 'react-router-dom';
import './header.style.scss';
import { ReactComponent as Logo } from './../../assest/crown.svg'
const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='shop' className='option'>
                shop
            </Link>
            <Link to='contact' className='option'>
                contact
            </Link>
        </div>
    </div>
)
export default Header;