import './Dashboard.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Cards/Card';
import Categories from '../../components/Titles/Categories/Categories';
import Main from '../../components/Titles/Main/Main';
import AddFoodBtn from '../../components/buttons/AddFoodBtn/AddFoodBtn';
import Backdrop from '../../components/Backdrop/Backdrop';
import Breadcrum from '../../components/Breadcrum/Breadcrum';
import { fetchAllFoodsAction, clearEditFood, clearDBFood } from '../../redux/actions/foodActions';
import { FoodCategories } from '../../redux/reducers/foodReducer';
import { backdropShow } from '../../redux/actions/layoutActions';
import { RootState } from '../../redux/reducers/index';

const Dashboard = () => {

    const dispatch = useDispatch();
    const foods = useSelector((state: RootState) => state.foodReducer.foods);
    const foodMethod = useSelector((state: RootState) => state.foodReducer.foodMethod);
    const updateUI = useSelector((state: RootState) => state.layoutReducer.updateUI);

    useEffect(() => {
        dispatch(fetchAllFoodsAction());
    }, [dispatch, updateUI])


    const carbs = foods && foods.map(food => {
        if (food.type.toUpperCase() === 'CARBOHYDRATE') {
            return <Card
                key={food.id}
                id={food.id}
                name={food.name}
                calories={food.calories}
                type={food.type}
            ></Card>
        };
    });

    const proteins = foods && foods.map(food => {
        if (food.type.toUpperCase() === 'PROTEIN') {
            return <Card
                key={food.id}
                id={food.id}
                name={food.name}
                calories={food.calories}
                type={food.type}
            ></Card>
        };
    });

    const fats = foods && foods.map(food => {
        if (food.type.toUpperCase() === 'FAT') {
            return <Card
                key={food.id}
                id={food.id}
                name={food.name}
                calories={food.calories}
                type={food.type}
            ></Card>
        };
    });


    return (
        <div className='dashboard'>
            <Breadcrum backcolor={foodMethod === 'Added' ? '#04b31c' : 'gray'} textcolor={'#FFFFFF'} methodText={foodMethod.toLowerCase()} />
            <Backdrop />
            <nav className='dashboard__nav'>
                <div className='dashboard__nav__title'>
                    <Main />
                </div>
                <div className='dashboard__nav__button'>
                    <AddFoodBtn onClick={() => {
                        dispatch(backdropShow())
                        dispatch(clearEditFood({
                            id: '', name: '', type: FoodCategories.Carbohydrate, calories: 0
                        }))
                        dispatch(clearDBFood({
                            id: '', name: '', type: FoodCategories.Carbohydrate, calories: 0
                        }))
                    }} />
                </div>
            </nav>
            <main className='dashboard__main'>
                <div className='dashboard__main__1'>
                    <Categories>Carbohydrate</Categories>
                    {carbs}
                </div>
                <div className='dashboard__main__2'>
                    <Categories>Protein</Categories>
                    {proteins}
                </div>
                <div className='dashboard__main__3'>
                    <Categories>Fat</Categories>
                    {fats}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;