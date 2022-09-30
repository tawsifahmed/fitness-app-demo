import React, { useState, useEffect } from 'react';
import { addToDb, getStoredCart } from '../../utilities/StoreData';
import './BreakComponents.css'
import BreakInput from '../BreakInput/BreakInput'
import BreakField from '../BreakField/BreakField';

const BreakComponents = () => {
    const [breaks, setBreaks] = useState([]);
    const [breakField, setBreakFields] = useState([]);

    useEffect(() => {
        fetch('break.json')
            .then(res => res.json())
            .then(data => setBreaks(data))
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const _id in storedCart) {
            const addedBreak = breaks.find(breakk => breakk._id === _id);
            if (addedBreak) {
                const quantity = savedCart[_id];
                addedBreak.quantity = quantity;
                savedCart.push(addedBreak);
            }
        }
        setBreakFields(savedCart)
    }, [breaks])

    const handleAddToBreak = (breakk) => {

        const newBreak = [...breakField, breakk];
        setBreakFields(newBreak);
        addToDb(breakk._id);
    }

    return (

        <div className='break-container'>
            <p className='fs-4'>Add a Break Time:</p>
            <div className='break-input d-flex flex-row m-3 justify-content-evenly'>
                {
                    breaks.map(breakk => <BreakInput breakk={breakk}
                        key={breakk._id}
                        handleAddToBreak={handleAddToBreak}></BreakInput>)
                }
            </div>
            <div className='break-field'>
                <BreakField
                    breakField={breakField}></BreakField>
            </div>
        </div>
    );
};

export default BreakComponents;