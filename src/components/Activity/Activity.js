import React from 'react';
import './Activity.css'

const Activity = ({activity}) => {
    const {title, description, age, time, img} = activity

    let cutAbout = ''; 

    if (description.length >= 100) {
        cutAbout = description.slice(0, 100)
    }

    return (
        <div className='activity'>
            <img src={img} alt="" />
            <h3>{title} </h3>
            <p className='about' title={description}>{cutAbout ? cutAbout + '...' : description} </p>
            <p>For Age: <b>17-{age}</b> </p>
            <p> Time required: <b>{time}s</b> </p>
            <div className='btn-container'>
                <button>Add to list</button>
            </div>
        </div>
    );
};

export default Activity;