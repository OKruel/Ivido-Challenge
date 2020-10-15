import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearEditFood } from '../../redux/actions/foodActions';
import { FoodCategories } from '../../redux/reducers/foodReducer';
import { RootState } from '../../redux/reducers/index';
import './Breadcrum.scss';
import CloseBtn from '../buttons/CloseBtn/CloseBtn';

interface PropTypes {
    backcolor: string;
    textcolor: string;
    methodText: string;
}

const Breadcrum = (props: PropTypes) => {
    const dispatch = useDispatch();

    const editedProduct = useSelector((state: RootState) => state.foodReducer.editFood);

    const clearBreadcrum = () => {
        dispatch(clearEditFood({
            id: '', name: '', type: FoodCategories.Carbohydrate, calories: 0
        }))
    }

    return (
        <div
            className={`breadcrum ${editedProduct.name ? 'breadcrum__visible' : ''}`}
            style={{backgroundColor: props.backcolor, color: props.textcolor}}
        >
            <div className='breadcrum__title'>You've {props.methodText} {editedProduct.name}</div>
            <div className='breadcrum__btn'>
                <CloseBtn onClick={clearBreadcrum} backcolor={props.backcolor} iconcolor={props.textcolor} />
            </div>
        </div>
    );
};

export default Breadcrum;