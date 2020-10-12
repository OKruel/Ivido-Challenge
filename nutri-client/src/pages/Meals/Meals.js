import React from 'react';
import './Meals.scss';

import MyMeals from '../../components/Lists/MyMeals/MyMeals';
import CreateMealForm from '../../components/Forms/CreateMeal/CreateMealForm';


const Meals = props => {
    return (
        <div className='meals'>
            <div className='meals__list'>
                <MyMeals />
            </div>
            <div className='meals__form'>
                <CreateMealForm />
            </div>
        </div>
    );
};

export default Meals;