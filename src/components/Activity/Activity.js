import React from 'react';
import './Activity.css'

const Activity = ({activity}) => {
    const {title, description, age, time, img} = activity

    let cutAbout = ''; 
    let restSlice = '';

    if (description.length >= 70) {
        cutAbout = description.slice(0, 70)
        restSlice = description.slice(70)
    }

    return (
        <div className='activity bg-white'>
            <img src={img} alt="" />
            <h3>{title} </h3>
            <p className='about' title={restSlice && restSlice}>{cutAbout ? cutAbout + '...' : description} </p>
            <p>For Age: <b>17-{age}</b> </p>
            <p> Time required: <b>{time}s</b> </p>
            <div className='btn-container'>
                <button className='bg-green'>Add to list</button>
            </div>
        </div>
    );
};

export default Activity;