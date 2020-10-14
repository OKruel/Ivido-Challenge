import './Dashboard.scss';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Card from '../../components/Cards/Card';
import Categories from '../../components/Titles/Categories/Categories';
import Main from '../../components/Titles/Main/Main';
import AddFood from '../../components/buttons/AddFoodBtn/AddFoodBtn';
// import Backdrop from '../../components/Backdrop/Backdrop';

import { fetchAllFoodsAction } from '../../redux/actions/foodActions';

const Dashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {

            dispatch(fetchAllFoodsAction());

    }, [dispatch])


    return (
        <div className='dashboard'>
            {/* <Backdrop /> */}
            <nav className='dashboard__nav'>
                <div className='dashboard__nav__title'>
                    <Main />
                </div>
                <div className='dashboard__nav__button'>
                    <AddFood />
                </div>
            </nav>
            <main className='dashboard__main'>
                <div className='dashboard__main__1'>
                    <Categories />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className='dashboard__main__2'>
                    <Categories />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className='dashboard__main__3'>
                    <Categories />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;