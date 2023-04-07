import React, { useState } from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPinLock } from '@fortawesome/free-solid-svg-icons';


let clickedBtn = 0;

const Cart = ({exerciseTime}) => {

    const [exerciseBreakTime, setExerciseBreakTime] = useState(0);

    const breakTime = time => {
        setExerciseBreakTime(time)
        
        if (clickedBtn > 0) {
            document.querySelector(`.sec${clickedBtn}`).classList.remove('bg-green');
        }
        clickedBtn = time;
        document.querySelector(`.sec${time}`).classList.add('bg-green')
    }

    return (
        <div>
            <div className="mobile-flex">
                <div className="person flex">
                    <img src={require("./profile.jpg")} alt="" />
                    <div className="person-info">
                        <h4>Abdullah Bin Rowshan</h4>
                        <p><FontAwesomeIcon icon={faLocationPinLock} /> Cumilla,Bangladesh </p>
                    </div>
                </div>
                <div className="fitness-info flex primary-bg">
                    <p><b>67</b><span>
                        kg
                        <br />
                        Weight
                    </span></p>
                    <p><b>5.11</b><span>
                        "
                        <br />
                        Height
                    </span></p>
                    <p><b>23</b>
                        <span>
                            yrs
                            <br />
                            Age
                        </span>
                    </p>
                </div>
            </div>
            <div className="break-container">
                <h4>Add A Break</h4>
                <div className="break-btns flex primary-bg">
                    <button onClick={() => breakTime(10)} className="bg-white sec10">10s</button>
                    <button onClick={() => breakTime(20)} className="bg-white sec20">20s</button>
                    <button onClick={() => breakTime(30)} className="bg-white sec30">30s</button>
                    <button onClick={() => breakTime(40)} className="bg-white sec40">40s</button>
                </div>
            </div>
            <div className="details-container">
                <h4>Exercise Details</h4>
                <div className="details">
                    <p className='flex primary-bg'><b>Exercise time</b> <span>{exerciseTime} s</span></p>
                    <p className='flex primary-bg'><b>Break time</b> <span>{exerciseBreakTime} s</span></p>
                </div>
            </div>
            <div className="completed-btn-container">
                <button className="complete-btn bg-green ">Activity Component</button>
            </div>
        </div>
    );
};

export default Cart;