import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <nav>
                    <ul className='nav-menu'>
                        <li><a href="/">Shop</a></li>
                        <li><a href="/">Orders</a></li>
                        <li><a href="/">Inventory</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;