import React from 'react';
import './AddFoodForm.scss';
import AddFood from '../buttons/AddFood/AddFood';
import TextInput from '../Inputs/Text/TextInput';

const AddFoodForm = () => {
    return (
        <div className='add-food-form'>
            <div className='add-food-form__title'>Add food</div>
            <div className='add-food-form__input1'>
                <TextInput />
            </div>
            <div className='add-food-form__input2'>
                <TextInput />
            </div>
            <div className='add-food-form__input3'>
                <TextInput />
            </div>
            <div className='add-food-form__buttons'>
                <div>
                    <AddFood />
                </div>
                <div>
                    <AddFood />
                </div>
            </div>
        </div>
    );
};

export default AddFoodForm;
