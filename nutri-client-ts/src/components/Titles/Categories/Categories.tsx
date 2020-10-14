import React from 'react';
import './Categories.scss';

interface PropsTypes {
    children: string
}

const Categories = (props: PropsTypes) => {
    return (
        <div className='categories'>{props.children}</div>
    );
};

export default Categories;
