import React from 'react';
import './Backdrop.scss';
import AddFoodForm from '../Forms/AddFoodForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/index';

const Backdrop = () => {

    const backdrop = useSelector((state: RootState) => state.layoutReducer.backdrop);

    return (
        <div className={`backdrop ${backdrop ? '' : 'backdrop__invisible'}`}>
            <AddFoodForm />
        </div>
    );
};

export default Backdrop;