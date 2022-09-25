
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css';

const Products = (props) => {
    // console.log(props);
    const { img, name, price, category, ratings } = props.product;
    return (
        <div className='product-cart'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <div className='product-sub-details'>
                    <p>Price: {price}</p>
                    <p>Category: {category}</p>
                    <p>Ratings: {ratings}</p>
                </div>
            </div>
            <button onClick={() => props.handleCartProducts(props.product)} className='cart-button'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;