import React from 'react';
import './BreakField.css'

const BreakField = (props) => {
    const { breakField } = props;


    let brkTime = 0;
    for (const breakk of breakField) {
        brkTime = breakk.br;
    }
    return (
        <div>
            <h2 className='fs-6'>Break Time: <span>{brkTime} Seconds</span></h2>
        </div>
    );
};

export default BreakField;