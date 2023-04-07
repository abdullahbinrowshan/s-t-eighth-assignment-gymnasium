import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPinLock } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
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
                    <button className="bg-white">10s</button>
                    <button className="bg-green">20s</button>
                    <button className="bg-white">30s</button>
                    <button className="bg-white">40s</button>
                </div>
            </div>
            <div className="details-container">
                <h4>Exercise Details</h4>
                <div className="details">
                    <p className='flex primary-bg'><b>Exercise time</b> <span>00 s</span></p>
                    <p className='flex primary-bg'><b>Break time</b> <span>20 s</span></p>
                </div>
            </div>
            <div className="completed-btn-container">
                <button className="complete-btn bg-green ">Activity Component</button>
            </div>
        </div>
    );
};

export default Cart;