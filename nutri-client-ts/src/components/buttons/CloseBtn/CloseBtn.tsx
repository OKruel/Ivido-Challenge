import React from 'react';
import './CloseBtn.scss';

interface PropTypes {
    onClick: (e: React.MouseEvent) => void;
    iconcolor?: string;
    backcolor?: string;
}

const CloseButton = (props: PropTypes) => {
    return (
        <div className='close-button' style={{backgroundColor: props.backcolor}} >
            <div
                className='close-button__container'
                {...props}
                style={{backgroundColor: props.backcolor}}
            >
                <div className='close-button__icon' style={{backgroundColor: props.iconcolor}}></div>
            </div>
        </div>
    );
};

export default CloseButton;