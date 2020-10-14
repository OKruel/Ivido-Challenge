import React from 'react';
import './DropDownInput.scss';

const DropDownInput = () => {
    return (
        <div className='drop-down'>
            <label className='drop-down__label' >Type</label>
            <select
                className='drop-down__select'
                placeholder='Select'
            // value={type}
            // onChange={e => setType(e.target.value)}
            >
                <option className='drop-down__option' value='carbohydrate'>Carbohydrate</option>
                <option className='drop-down__option' value='protein'>Protein</option>
                <option className='drop-down__option' value='fat'>Fat</option>
            </select>
        </div>
    );
};

export default DropDownInput;