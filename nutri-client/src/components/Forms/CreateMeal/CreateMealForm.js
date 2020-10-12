import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CreateMealForm.scss';
import axios from 'axios';
import { newMealAction } from '../../../redux/actions/NewMeal/newMealActions';

const CreateMealForm = props => {
    //!REDUX STATE
    const dispatch = useDispatch();
    const editMeal = useSelector(state => state.editMealReducer.editMeal);
    console.log(editMeal)
    //!LOCAL STATE
    const [mealId, setMealId] = useState('');
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [carbohydrate, setCarbohydrate] = useState('');
    const [protein, setProtein] = useState('');
    const [sugar, setSugar] = useState('');
    const [fat, setFat] = useState('');


    useEffect(() => {
        if (editMeal) {
            setMealId(editMeal.id)
            setType(editMeal.type);
            setName(editMeal.name);
            setCarbohydrate(editMeal.carbohydrate);
            setProtein(editMeal.protein);
            setSugar(editMeal.sugar);
            setFat(editMeal.fat);
        }
    }, [editMeal]);

    const cancelForm = event => {

        event.preventDefault();

        setType('');
        setName('');
        setCarbohydrate('');
        setProtein('');
        setSugar('');
        setFat('');
    };

    //!SUBMIT FORM HANDLER
    const submitFormHandler = event => {
        event.preventDefault();

        if (mealId) {
            axios.put(`http://localhost:5000/nutrition/${mealId}`, {
                type,
                name,
                carbohydrate,
                protein,
                sugar,
                fat
            })
                .then(res => {
                    dispatch(newMealAction());
                    cancelForm();
                })
                .catch(err => console.log(err))

            return;
        }

        axios.post('http://localhost:5000/nutrition', {
            type,
            name,
            carbohydrate,
            protein,
            sugar,
            fat
        })
            .then(res => {
                dispatch(newMealAction());
                cancelForm();
            })
            .catch(err => console.log(err))
    };


    //!MAIN RENDER
    return (
        <form className='mealForm'>
            <h3 className='mealForm__title'>Create Meal</h3>
            <div className='mealForm__content'>
                <div className='mealForm__form-group'>
                    <select
                        className='mealForm__form-group__input'
                        value={type}
                        onChange={e => setType(e.target.value)}
                    >
                        <option value='Select a category'>Select the Category of the meal</option>
                        <option value='breakfast'>Breakfast</option>
                        <option value='lunch'>Lunch</option>
                        <option value='snack'>Snack</option>
                        <option value='dinner'>Dinner</option>
                    </select>
                </div>
                <div className='mealForm__form-group'>
                    <input
                        className='mealForm__form-group__input'
                        type='text'
                        placeholder='Type here the Name of the food'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <label className='mealForm__form-group__label' >Food</label>
                </div>
                <div className='mealForm__form-group'>
                    <input
                        className='mealForm__form-group__input'
                        type='number'
                        placeholder='Type here the amount of Carbohydrates'
                        value={carbohydrate}
                        onChange={e => setCarbohydrate(e.target.value)}
                    />
                    <label className='mealForm__form-group__label' >Carbohydrates</label>
                </div>
                <div className='mealForm__form-group'>
                    <input
                        className='mealForm__form-group__input'
                        type='number'
                        placeholder='Type here the amount of Proteins'
                        value={protein}
                        onChange={e => setProtein(e.target.value)}
                    />
                    <label className='mealForm__form-group__label' >Protein</label>
                </div>
                <div className='mealForm__form-group'>
                    <input
                        className='mealForm__form-group__input'
                        type='number'
                        placeholder='Type here the amount of Sugars'
                        value={sugar}
                        onChange={e => setSugar(e.target.value)}
                    />
                    <label className='mealForm__form-group__label' >Sugar</label>
                </div>
                <div className='mealForm__form-group'>
                    <input
                        className='mealForm__form-group__input'
                        type='number'
                        placeholder='Type here the amount of Fats'
                        value={fat}
                        onChange={e => setFat(e.target.value)}
                    />
                    <label className='mealForm__form-group__label' >Amount of fats</label>
                </div>
            </div>
            <div className='mealForm__buttonsContainer'>
                <button className='mealForm__buttonsContainer__button' onClick={submitFormHandler}>Save</button>
                <button className='mealForm__buttonsContainer__button' onClick={cancelForm}>Cancel</button>
            </div>
        </form>
    );
};

export default CreateMealForm;
