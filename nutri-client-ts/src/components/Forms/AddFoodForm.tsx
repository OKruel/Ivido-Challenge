import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { backdropHide } from '../../redux/actions/layoutActions';
import './AddFoodForm.scss';
import AddFoodBtn from '../buttons/AddFoodBtn/AddFoodBtn';
import CancelBtn from '../buttons/CancelBtn/CancelBtn';
import TextInput from '../Inputs/Text/TextInput';
import DropDownInput from '../Inputs/DropDown/DropDownInput';

import axios from 'axios';

interface PostData {
    name: string;
    type: string;
    calories: number;
}

const AddFoodForm = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [calories, setCalories] = useState('');

    const onCancel = () => {
        setName('');
        setType('');
        setCalories('');
        dispatch(backdropHide())
    }

    const onAddFood = (e: React.MouseEvent) => {
        e.preventDefault();

        const postData: PostData = {
            name,
            type,
            calories: parseFloat(calories)
        }

        axios.post('http://localhost:5000/nutrition', postData)
            .then(res => {
                onCancel();
                console.log(res)
            })
            .catch(er => console.log(er))
    }

    return (
        <div className='add-food-form'>
            <div className='add-food-form__title'>Add food</div>
            <div className='add-food-form__input1'>
                <TextInput
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </div>
            <div className='add-food-form__input2'>
                <DropDownInput
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                />
            </div>
            <div className='add-food-form__input3'>
                <TextInput
                    onChange={(e) => setCalories(e.target.value)}
                    value={calories}
                />
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
