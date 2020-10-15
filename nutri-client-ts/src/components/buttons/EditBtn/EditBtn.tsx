import React from 'react';
import './EditBtn.scss';

interface PropTypes {
    onClick: (e: React.MouseEvent) => void;
}

const EditBtn = (props: PropTypes) => {

    return (
        <div className='edit-btn' {...props}>
            <div className='edit-btn__icon'></div>
        </div>
    );
};

export default EditBtn;
