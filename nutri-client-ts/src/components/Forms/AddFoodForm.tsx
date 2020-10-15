import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { backdropHide } from '../../redux/actions/layoutActions';
import { addFoodAction, PostData, clearEditFood } from '../../redux/actions/foodActions';
import { FoodCategories } from '../../redux/reducers/foodReducer';
import { RootState } from '../../redux/reducers/index';
import './AddFoodForm.scss';
import AddFoodBtn from '../buttons/AddFoodBtn/AddFoodBtn';
import CancelBtn from '../buttons/CancelBtn/CancelBtn';
import MyInput from '../Inputs/Text/TextInput';
import DropDownInput from '../Inputs/DropDown/DropDownInput';
import ErrorMsg from '../ErrorMsg/ErrorMsg';

const AddFoodForm = () => {

    const dispatch = useDispatch();
    const food = useSelector((state: RootState) => state.foodReducer.editFood)

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [calories, setCalories] = useState('');
    const [sendForm, setSendForm] = useState(false);

    // useEffect(() => {
    //     if (food.id.length > 0) {
    //         setName(food.name);
    //         setType(food.type);
    //         setCalories(food.calories.toString());
    //     }
    // }, [food]);

    const onCancel = () => {
        setName('');
        setType('');
        setCalories('');
        setSendForm(false);
        dispatch(backdropHide());
    }

    const onAddFood = async (e: React.MouseEvent) => {
        e.preventDefault();


        if (name.length === 0 || type.length === 0 || calories.length === 0) {
            setSendForm(true);
            return;
        }

        setSendForm(false);

        const postData: PostData = {
            name,
            type,
            calories: parseFloat(calories)
        }

        dispatch(addFoodAction(postData));
        dispatch(backdropHide());
        dispatch(clearEditFood({
            id: '',
            name: '',
            calories: 0,
            type: FoodCategories.Carbohydrate
        }));

        setName('');
        setType('');
        setCalories('');
    }

    return (
        <div className='add-food-form'>
            <div className='add-food-form__title'>Add food</div>
            <div className='add-food-form__input1'>
                <MyInput
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    desc={'Name'}
                    mytype={'text'}
                    myplaceholder={'Name of food'}
                    valid={sendForm === true && name.length === 0}
                />
                <ErrorMsg msg={'Field should not be empty'} visible={sendForm === true && name.length === 0} />
            </div>
            <div className='add-food-form__input2'>
                <DropDownInput
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                    valid={sendForm === true && type.length === 0}
                />
                <ErrorMsg msg={'Select a type'} visible={sendForm === true && type.length === 0} />
            </div>
            <div className='add-food-form__input3'>
                <MyInput
                    onChange={(e) => setCalories(e.target.value)}
                    value={calories}
                    desc={'Calories'}
                    mytype={'number'}
                    myplaceholder={'000'}
                    valid={sendForm === true && name.length === 0}
                />
                <ErrorMsg msg={'Field should not be empty'} visible={sendForm === true && calories.length === 0} />
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
