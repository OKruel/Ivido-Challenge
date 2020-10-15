import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearDBFood } from '../../redux/actions/foodActions';
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

    const dbFood = useSelector((state: RootState) => state.foodReducer.dbFood);

    const clearBreadcrum = () => {
        dispatch(clearDBFood({
            id: '', name: '', type: FoodCategories.Carbohydrate, calories: 0
        }))
    }

    return (
        <div
            className={`breadcrum ${dbFood.name ? 'breadcrum__visible' : ''}`}
            style={{backgroundColor: props.backcolor, color: props.textcolor}}
        >
            <div className='breadcrum__title'>You've {props.methodText} {dbFood.name}</div>
            <div className='breadcrum__btn'>
                <CloseBtn onClick={clearBreadcrum} backcolor={props.backcolor} iconcolor={props.textcolor} />
            </div>
        </div>
    );
};

export default Breadcrum;