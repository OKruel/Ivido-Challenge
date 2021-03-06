import React from 'react';
import './TextInput.scss';

interface PropType {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    desc: string;
    mytype: string;
    myplaceholder: string
    valid: boolean
}

const MyInput = (props: PropType) => {
    return (
        <div className='input-text'>
            <label className='input-text__label'>{props.desc}</label>
            <input
                type={props.mytype}
                placeholder={props.myplaceholder}
                className={`input-text__input ${props.valid ? 'input-text__input__error' : '' }`}
                {...props}
            />
        </div>
    );
};

export default MyInput;