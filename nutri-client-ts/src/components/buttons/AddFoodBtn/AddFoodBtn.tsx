import React from 'react';
import './AddFoodBtn.scss';

interface PropType {
    onClick: (e: React.MouseEvent) => void
}

const AddFoodBtn = (props: PropType) => {
    return (
        <button
            className='add-food'
        	{...props}
        >
            Add food
        </button>
    )
}

export default AddFoodBtn;