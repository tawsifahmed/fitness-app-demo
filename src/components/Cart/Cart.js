import React from 'react';
import './Cart.css'
import photo from '../../images/Ernest_Hemingway.jpeg'

const Cart = (props) => {
    const { cart } = props;
    let exTime = 0;
    for (const item of cart) {
        exTime = exTime + item.time;
    }


    return (
        <div className='cart'>
            <div className='profile'>
                <img src={photo} alt="" />
                <p>Ernest Hamingway</p>
                <div className='profile-info'>
                    <small>Height: 1.83m</small>
                    <br />
                    <small>Weight: 85KG</small>
                    <br />
                    <small>Age: 25</small>
                </div>
            </div>
            <div className='break-info'>
                <h3>Add a break</h3>
            </div>
            <div className='exercise-info'>

                <h4>Exercise Time: {exTime} Seconds </h4>

            </div>
        </div>
    );
};

export default Cart;