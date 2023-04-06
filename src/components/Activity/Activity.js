import React from 'react';

const Activity = ({activity}) => {
    const {title, description, time, img} = activity
    return (
        <div>
            <img src={img} alt="" />
            <h1>{title} </h1>
            <p>{description} </p>
            <p><span>{time} </span> </p>
        </div>
    );
};

export default Activity;