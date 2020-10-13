import React from 'react';
import './Backdrop.scss';
import AddFoodForm from '../Forms/AddFoodForm';


const Backdrop = () => {
    return (
        <div className='backdrop'>
            <AddFoodForm />
        </div>
    );
};

export default Backdrop;