import React from 'react';
import './item.css'

const item = ({ item }) => {
    const { name, img, time } = item;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <div className='item-info'>
                <h2>{name}</h2>
                <p>Time Required: {time}</p>
            </div>
            <button className='btn-cart'>Add to List</button>
        </div>
    );
};

export default item;