import React from 'react';
import './Card.scss';
import CloseButton from '../buttons/CloseBtn/CloseBtn';

const Card = () => {
    return (
        <div className='card'>
            <div className='card__info'>
                <div className='card__info__meal'>Name of the Meal</div>
                <div className='card__info__amount'>Amount</div>
            </div>
            <div className='card__button'>
                <CloseButton />
            </div>
        </div>
    );
};

export default Card;