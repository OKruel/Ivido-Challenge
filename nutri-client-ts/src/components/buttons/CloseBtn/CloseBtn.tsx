import React from 'react';
import './CloseBtn.scss';

interface PropTypes {
    onClick: (e: React.MouseEvent) => void
}

const CloseButton = (props: PropTypes) => {
    return (
        <div className='close-button'>
            <div
                className='close-button__container'
                {...props}
            >
                <div className='close-button__icon'></div>
            </div>
        </div>
    );
};

export default CloseButton;