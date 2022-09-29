import React from 'react';
import './BreakInput.css'

const BreakInput = ({ breakk, handleAddToBreak }) => {

    const { br } = breakk;
    return (
        <div className='br-inputs mx-2 pt-1'>
            <button onClick={() => handleAddToBreak(breakk)} className='fs-4 p-1 btn btn-primary'>{br}S</button>

        </div>
    );
};

export default BreakInput;