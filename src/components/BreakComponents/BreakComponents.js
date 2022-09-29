import React, { useState, useEffect } from 'react';
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
    }, [])

    const handleAddToBreak = (breakk) => {

        const newBreak = [...breakField, breakk];
        setBreakFields(newBreak);

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