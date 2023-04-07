import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Main.css';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


const Main = () => {
    const [activities, setActivities] = useState([])
    
    const [exerciseTime, setExerciseTime] = useState(0);

    const addToExerciseList = time => {
        setExerciseTime(exerciseTime + time);
    }
    
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    return (
        <div className='main-container primary-bg'>
            <div className="cart-container bg-white">
                <Cart exerciseTime={exerciseTime} />
            </div>
            <div className="activities-container">
                <h1 className='heading'> <span><FontAwesomeIcon className='rotate' icon={faDumbbell} /></span> GYMNASIUM-CLUB </h1>
                <h4>Select today’s exercise</h4>
                <div className='activity-container'>
                    {
                        activities.map(activity => <Activity
                            addToExerciseList={addToExerciseList}
                            activity={activity}
                            key={activity.id}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Main;