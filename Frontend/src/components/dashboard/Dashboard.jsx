import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Chart from "react-apexcharts";
import Cal from './Cal';
import Reminder from './Reminder';
import notificationSound from '../images/notify.mp3';
import Nutrition from './Nutrition';
 

import BMICalculator from './BMICalculator';
import Macro from './Macro';

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const first_name = useSelector(state => state.first_name);
    const last_name = useSelector(state => state.last_name);

  

  

    const handleLogOut = () => {
        sessionStorage.clear();
        navigate("/");
        dispatch({ type: "ISlOGGEDOUT" });
    };

    return (
        <div>
            <section className='py-5 hero-bg1'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                            <div className='m-2 py-5'>
                                <h2 className='text-white'>Welcome</h2>
                                <ul className='list-inline d-flex mb-0'>
                                    <li style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold' }} onClick={handleLogOut}>
                                        {first_name} {last_name}
                                    </li>
                                </ul>
                                <p className='text-white lead'>Explore all Our Fitness Tracking Facilities </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*end of the section*/}
            <section className='py-5'>
                <div className='container'>
                    <div className='row justify-content-evenly'>
                        <div className='col-xs-12 col-sm-12 col-md-2 col-lg-2'>
                            <div className='my-2'>
                                <a href='#cal' className='btn btn-primary rounded-pill px-4 py-2 rounded-0 border-0'>Calories Calculator</a>
                            </div>
                            
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-2  col-lg-2'>
                        <div className='my-2'>
                                <a href='#bmi' className='btn btn-primary rounded-pill px-4 py-2 rounded-0 border-0'>Calculate BMI</a>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-2  col-lg-2'>
                        <div className='my-2'>
                                <a href='#macro' className='btn btn-primary rounded-pill px-4 py-2 rounded-0 border-0'> Calculate  Macro</a>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-2  col-lg-2'>
                        <div className='my-2'>
                                <a href='#remind' className='btn btn-primary rounded-pill px-4 py-2 rounded-0 border-0'>Activity Reminder</a>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-2  col-lg-2'>
                        <div className='my-2'>
                                <a href='#remind' className='btn btn-primary rounded-pill px-4 py-2 rounded-0 border-0'>Nutrition Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Cal/>
            <BMICalculator/>
            <Macro/>
            <Reminder/>
            <Nutrition/>
          
         
        </div>
    );
}

export default Dashboard;
