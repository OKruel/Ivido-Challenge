import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './MyMeals.scss';
import { editMealAction } from '../../../redux/actions/EditMeal/editMealActions';

const MyMeals = props => {

    const [myMeals, setMyMeals] = useState('');
    const dispatch = useDispatch();
    const mealDB = useSelector(state => state.newMealReducer.newMeal);

    useEffect(() => {
        axios.get('http://localhost:5000/nutrition')
            .then(res => {
                setMyMeals(res.data)
            })
            .catch(err => console.log(err))
    }, [mealDB]);

    const onEdit = (event, meal) => {
        event.preventDefault();
        dispatch(editMealAction(meal));
    }

    const onDelete = (event, mealId) => {
        event.preventDefault();

        axios.delete(`http://localhost:5000/nutrition/${mealId}`)
            .then(res => {
                const newMeals = myMeals && myMeals.filter(meal => {
                    return meal.id !== mealId
                })
                setMyMeals(newMeals)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='myMeals'>
            {myMeals && myMeals.map(meal => {
                return (
                    <div className='card' key={meal.id}>
                        <h3 className='card__title'>
                            <div>{meal.type.toUpperCase()}</div>
                        </h3>
                        <div className='card__body'>
                            <div>Name: {meal.name}</div>
                            <div>Carbohydrate: {meal.carbohydrate} g</div>
                            <div>Protein: {meal.protein} g</div>
                            <div>Sugar: {meal.sugar} g</div>
                            <div>Fat: {meal.fat} g</div>
                        </div>
                        <div className='card__btn-container'>
                            <button className='card__btn-container__btn' onClick={(event) => onEdit(event, meal)}>Edit</button>
                            <button className='card__btn-container__btn' onClick={event => onDelete(event, meal.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default MyMeals;