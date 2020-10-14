import React from 'react';
import './AddFoodForm.scss';
import AddFoodBtn from '../buttons/AddFoodBtn/AddFoodBtn';
import CancelBtn from '../buttons/CancelBtn/CancelBtn';
import TextInput from '../Inputs/Text/TextInput';
import DropDownInput from '../Inputs/DropDown/DropDownInput';

const AddFoodForm = () => {
    return (
        <div className='add-food-form'>
            <div className='add-food-form__title'>Add food</div>
            <div className='add-food-form__input1'>
                <TextInput />
            </div>
            <div className='add-food-form__input2'>
                <DropDownInput />
            </div>
            <div className='add-food-form__input3'>
                <TextInput />
            </div>
            <div className='add-food-form__buttons'>
                <div>
                    <CancelBtn />
                </div>
                <div>
                    <AddFoodBtn />
                </div>
            </div>
        </div>
    );
};

export default AddFoodForm;
