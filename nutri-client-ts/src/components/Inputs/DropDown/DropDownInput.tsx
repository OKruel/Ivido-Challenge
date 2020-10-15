import React from 'react';
import './DropDownInput.scss';

interface PropType {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
}

const DropDownInput = (props: PropType) => {
    return (
        <div className='drop-down'>
            <label className='drop-down__label' >Type</label>
            <select
                className='drop-down__select'
                placeholder='Select'
                {...props}
            >
                <option className='drop-down__option' value='carbohydrate'>Carbohydrate</option>
                <option className='drop-down__option' value='protein'>Protein</option>
                <option className='drop-down__option' value='fat'>Fat</option>
            </select>
        </div>
    );
};

export default DropDownInput;