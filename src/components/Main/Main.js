import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Main.css';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


const Main = () => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='main-container'>
            <div className="activities-container">
                <h1 className='heading'> <span><FontAwesomeIcon className='rotate' icon={faDumbbell} /></span> GYMNASIUM-CLUB </h1>
                <h4>Age Select today’s exercise</h4>
                <div className='activity-container'>
                    {
                        activities.map(activity => <Activity activity={activity} key={activity.id} />)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart />
            </div>
        </div>
    );
};

export default Main;