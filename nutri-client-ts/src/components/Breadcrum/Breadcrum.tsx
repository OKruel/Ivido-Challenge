import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/index';
import './Breadcrum.scss';
import CloseBtn from '../buttons/CloseBtn/CloseBtn';

const Breadcrum = () => {

    const editedProduct = useSelector((state: RootState) => state.foodReducer.editFood)

    return (
        <div className={`breadcrum ${editedProduct.name ? 'breadcrum__visible' : ''}`}>
            <div className='breadcrum__title'>You've added {editedProduct.name}</div>
            <div className='breadcrum__btn'>
                <CloseBtn onClick={e => console.log('clicked')} />
            </div>
        </div>
    );
};

export default Breadcrum;