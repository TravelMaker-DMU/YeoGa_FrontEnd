import React, { useEffect, useState } from 'react';
import '../styles/User.css';
import UserNavbar from '../components/UserNavbar/UserNavbar';
import { useNavigate } from 'react-router-dom';


// useEffect, useState, useNavigate

const User = () => {
 

  return (
    <div className="User-page">
      <UserNavbar/>
     
    
      

 {/*
      <div className="User-Right-Sidebar-Container">
        <div className="Weather-widget">
          <p className='Weather-title-Container'>서울특별시</p>
          
          <div className='User-Weather-section'>
          <div className="User-weather-icon">🌤</div>
          <p className='User-Weather-temperature'>23°C</p>
          </div>

          <div className='User-Weather-section2'>
            
          </div>

        </div>
        
        <div className="schedule-widget">
          <h3>일정</h3>
          <div className="schedule-item">미팅 1</div>
          <div className="schedule-item">미팅 2</div>
        </div>
      </div>  */}

    </div>
  );
};

export default User;
