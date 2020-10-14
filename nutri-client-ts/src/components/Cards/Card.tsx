import React from 'react';
import './Card.scss';
import CloseButton from '../buttons/CloseBtn/CloseBtn';

interface PropTypes {
    name: string;
    calories: number;
}

const Card = (props: PropTypes) => {
    return (
        <div className='card'>
            <div className='card__info'>
                <div className='card__info__meal'>{props.name}</div>
                <div className='card__info__amount'>{props.calories} calories</div>
            </div>
            <div className='card__button'>
                <CloseButton />
            </div>
        </div>
    );
};

export default Card;