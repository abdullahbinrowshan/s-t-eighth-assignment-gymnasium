import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Main = () => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch('data.json')
         .then(res => res.json())
         .then(data => setActivities(data))
    }, [])
    return (
        <div>
            {
                activities.map(activity => <Activity activity={activity} key={activity.id} /> )
            }
            <h1>HELLO WORLD!</h1>
        </div>
    );
};

export default Main;