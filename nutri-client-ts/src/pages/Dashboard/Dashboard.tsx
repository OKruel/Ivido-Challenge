import React from 'react';
import './Dashboard.scss';
import Card from '../../components/Cards/Card';


const Dashboard = () => {
    return (
        <div className='dashboard'>
            <nav className='dashboard__nav'>Nav</nav>
            <main className='dashboard__main'>
                <Card />
            </main>
        </div>
    );
};

export default Dashboard;