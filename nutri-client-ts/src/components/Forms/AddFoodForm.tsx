import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { backdropHide } from '../../redux/actions/layoutActions';
import { addFoodAction, PostData } from '../../redux/actions/foodActions';
import { RootState } from '../../redux/reducers/index';
import './AddFoodForm.scss';
import AddFoodBtn from '../buttons/AddFoodBtn/AddFoodBtn';
import CancelBtn from '../buttons/CancelBtn/CancelBtn';
import TextInput from '../Inputs/Text/TextInput';
import DropDownInput from '../Inputs/DropDown/DropDownInput';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

const AddFoodForm = () => {

    const dispatch = useDispatch();
    // const food = useSelector((state: RootState) => state.foodReducer.foods)

    const [name, setName] = useState('');
    const [type, setType] = useState('carbohydrate');
    const [calories, setCalories] = useState('');

    // useEffect(() => {
    //     if (editMeal) {
    //         setMealId(editMeal.id)
    //         setType(editMeal.type);
    //         setName(editMeal.name);
    //         setCarbohydrate(editMeal.carbohydrate);
    //         setProtein(editMeal.protein);
    //         setSugar(editMeal.sugar);
    //         setFat(editMeal.fat);
    //     }
    // }, [editMeal]);

    const onCancel = () => {
        setName('');
        setType('carbohydrate');
        setCalories('');
        dispatch(backdropHide())
    }

    const onAddFood = async (e: React.MouseEvent) => {
        e.preventDefault();

        const postData: PostData = {
            name,
            type,
            calories: parseFloat(calories)
        }

        dispatch(addFoodAction(postData));
        dispatch(backdropHide())


        setName('');
        setType('carbohydrate');
        setCalories('');
    }



    return (
        <div className='add-food-form'>
            <div className='add-food-form__title'>Add food</div>
            <div className='add-food-form__input1'>
                <TextInput
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    desc={'Name'}
                />
                <ErrorMsg />
            </div>
            <div className='add-food-form__input2'>
                <DropDownInput
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                />
                <ErrorMsg />
            </div>
            <div className='add-food-form__input3'>
                <TextInput
                    onChange={(e) => setCalories(e.target.value)}
                    value={calories}
                    desc={'Calories'}
                />
                <ErrorMsg />
            </div>
            <div className='add-food-form__buttons'>
                <div>
                    <CancelBtn onClick={onCancel} />
                </div>
                <div>
                    <AddFoodBtn onClick={e => onAddFood(e)} />
                </div>
            </div>
        </div>
    );
};

export default AddFoodForm;
