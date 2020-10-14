import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearEditFood } from '../../redux/actions/foodActions';
import { FoodCategories } from '../../redux/reducers/foodReducer';
import { RootState } from '../../redux/reducers/index';
import './Breadcrum.scss';
import CloseBtn from '../buttons/CloseBtn/CloseBtn';

const Breadcrum = () => {
    const dispatch = useDispatch();

    const editedProduct = useSelector((state: RootState) => state.foodReducer.editFood);

    const clearBreadcrum = () => {
        dispatch(clearEditFood({ 
            id: '', name: '', type: FoodCategories.Carbohydrate, calories: 0 
        }))
    }

    return (
        <div className={`breadcrum ${editedProduct.name ? 'breadcrum__visible' : ''}`}>
            <div className='breadcrum__title'>You've added {editedProduct.name}</div>
            <div className='breadcrum__btn'>
                <CloseBtn onClick={clearBreadcrum} />
            </div>
        </div>
    );
};

export default Breadcrum;