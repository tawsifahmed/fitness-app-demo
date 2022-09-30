import React from 'react';
import './BreakField.css'

const BreakField = (props) => {
    const { breakField } = props;

    let brkTime = 0;

    for (const breakk of breakField) {
        brkTime = breakk.br;
    }

    return (
        <div className='p-3 bg-danger mb-2 rounded text-white'>
            <h2 className='fs-6'>Break Time: <span className='text-white'>{brkTime} Seconds</span></h2>
        </div>
    );
};

export default BreakField;