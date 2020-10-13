import React from 'react';
import './TextInput.scss';

const TextInput = () => {
    return (
        <div className='input-text'>
            <label className='input-text__label' htmlFor='inputText'>Name</label>
            <input
                id='inputText'
                type='text'
                placeholder='Name of food'
                className='input-text__input'
            />
        </div>
    );
};

export default TextInput;