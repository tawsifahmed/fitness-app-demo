import React, { useEffect, useState } from 'react';
import './Session.css'
import Item from '../Item/Item'
import Cart from '../Cart/Cart'

const Session = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])


    const handleAddToCart = (item) => {
        console.log(item);

        const newCart = [...cart, item];
        setCart(newCart);

    }

    return (
        <div>
            <div className='shop-container'>
                <div className="items-main-container">
                    <h3>Select Exercises</h3>
                    <div className='items-container'>
                        {
                            items.map(item => <Item item={item}
                                key={item.id}
                                handleAddToCart={handleAddToCart}></Item>)
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Session;