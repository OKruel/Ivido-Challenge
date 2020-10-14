import React from 'react';
import './TextInput.scss';

interface PropType {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    desc: string;
}

const TextInput = (props: PropType) => {
    return (
        <div className='input-text'>
            <label className='input-text__label'>{props.desc}</label>
            <input
                type='text'
                placeholder='Name of food'
                className='input-text__input'
                {...props}
            />
        </div>
    );
};

export default TextInput;