import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFood } from '../../redux/actions/foodActions';
import './Card.scss';
import CloseBtn from '../buttons/CloseBtn/CloseBtn';
import EditBtn from '../buttons/EditBtn/EditBtn';

interface PropTypes {
    name: string;
    calories: number;
    id: string;
}

const Card = (props: PropTypes) => {

    const dispatch = useDispatch();

    return (
        <div className='card'>
            <div className='card__info'>
                <div className='card__info__meal'>{props.name}</div>
                <div className='card__info__amount'>{props.calories} calories</div>
            </div>
            <div className='card__edit'>
                <EditBtn />
            </div>
            <div className='card__button'>
                <CloseBtn onClick={() => dispatch(deleteFood(props.id))} backcolor={'#FFFFFF'} iconcolor={'gray'} />
            </div>
        </div>
    );
};

export default Card;