import React from 'react';
import './ErrorMsg.scss';

interface PropTypes {
    msg: string;
    visible: boolean
}

const ErrorMsg = (props: PropTypes) => {

    return (
        <div className={`error-msg ${props.visible ? 'error-msg__visible' : ''}`}>
            {props.msg}
        </div>
    );
};

export default ErrorMsg;