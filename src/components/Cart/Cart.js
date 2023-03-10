import React from 'react';
import './Cart.css'
import photo from '../../images/Ernest_Hemingway.jpeg'
import BreakComponents from '../BreakComponents/BreakComponents';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Cart = (props) => {
    const { cart } = props;

    let exTime = 0;
    for (const item of cart) {
        exTime = exTime + item.time;
    }
    const notify = () => toast("Congratulations, You have finished your task!");

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
            <br />
            <div className='break-info'>
                <BreakComponents></BreakComponents>
            </div>
            <div className='exercise-info p-3 rounded'>

                <h2 className='fs-6'>Exercise Time: <span>{exTime} Seconds</span> </h2>

            </div>
            <div className='mt-4'>
                <button onClick={notify} className='btn btn-lg btn-primary'>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Cart;