import React, { useEffect, useState } from 'react';
import './Shop.css'
import Item from '../Item/item'

const Shop = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <div className='shop-container'>
                <div className="items-container">
                    {
                        items.map(item => <Item item={item}></Item>)
                    }
                </div>
                <div className="cart-container">
                    <h1>cart items</h1>
                </div>
            </div>
        </div>
    );
};

export default Shop;