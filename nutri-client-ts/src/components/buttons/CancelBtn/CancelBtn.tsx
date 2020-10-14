import React from 'react';
import './CancelBtn.scss';

interface PropType {
    onClick: (e: React.MouseEvent) => void
}

const CancelBtn = (props: PropType) => {
    return (
        <button
            className='cancel-btn'
            {...props}
        >
            Cancel
        </button>
    )
}

export default CancelBtn;