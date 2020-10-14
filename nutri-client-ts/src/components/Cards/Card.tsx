import React from 'react';
import { useDispatch } from 'react-redux';
import { updateUI } from '../../redux/actions/layoutActions';
import './Card.scss';
import CloseBtn from '../buttons/CloseBtn/CloseBtn';
import axios from 'axios';

interface PropTypes {
    name: string;
    calories: number;
    id: string;
}



const Card = (props: PropTypes) => {

    const dispatch = useDispatch();

    const deleteFood = (e: React.MouseEvent, id: string) => {
        console.log(e, id)
        axios.delete(` http://localhost:5000/nutrition/${id}`)
            .then(r => {
                dispatch(updateUI());
                console.log(r)
            })
            .catch(e => console.log(e))
    }

    return (
        <div className='card'>
            <div className='card__info'>
                <div className='card__info__meal'>{props.name}</div>
                <div className='card__info__amount'>{props.calories} calories</div>
            </div>
            <div className='card__button'>
                <CloseBtn onClick={(e) => deleteFood(e, props.id)} />
            </div>
        </div>
    );
};

export default Card;