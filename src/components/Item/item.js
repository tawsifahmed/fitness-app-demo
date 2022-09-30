import React from 'react';
import './Item.css'

const Item = ({ item, handleAddToCart }) => {
    const { name, img, time } = item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <div className='item-info'>
                <h2>{name}</h2>
                <p>Time Required: <strong>{time}</strong>s</p>
            </div>
            <button onClick={() => handleAddToCart(item)} className='btn-cart'>Add To Listt</button>
        </div>
    );
};

export default Item;
