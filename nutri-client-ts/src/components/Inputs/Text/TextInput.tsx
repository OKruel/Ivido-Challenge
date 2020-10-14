import React from 'react';
import './TextInput.scss';

const TextInput = () => {
    return (
        <div className='input-text'>
            <label className='input-text__label'>Name</label>
            <input
                type='text'
                placeholder='Name of food'
                className='input-text__input'
            />
        </div>
    );
};

export default TextInput;