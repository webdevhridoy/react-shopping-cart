import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleCartProducts = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (
        <div className='shop-container'>
            <div className='product-area'>
                <h3>Best Features</h3>
                <div className='product-container'>
                    {
                        products.map(product =>
                            <Products
                                product={product}
                                handleCartProducts={handleCartProducts}
                            ></Products>
                        )
                    }
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart.length}></Cart>
            </div>
        </div>
    );
};

export default Shop;