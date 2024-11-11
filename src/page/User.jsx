import React, { useEffect, useState } from 'react';
import UserNavbar from '../components/UserNavbar/UserNavbar';
// import { useNavigate } from 'react-router-dom';
import '../styles/User.css';



const User = () => {
  const [userInfo, setUserInfo] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const storedUserInfo = JSON.parse(localStorage.getItem('user'));
  
    if (!storedUserInfo) {
      console.log("사용자 정보가 없습니다.");
      // 필요한 경우, navigate를 통해 로그인 페이지로 이동하게 처리
      // navigate('/login'); // 주석을 풀어서 사용할 수 있습니다.
    } else {
      setUserInfo(storedUserInfo); // 사용자 정보 상태에 저장
    }
  }, []);

  return (
    <div className="User-page">
      <UserNavbar/>
      
      <div className='User-page-section'>
        <div className='User-page-section-container'>
        <div className='User-page-section-inpormation'>
          <h2>공지사항</h2>
          <div className='User-page-section-inpormation-title'>
            aa
          </div>
        </div>
        </div>
      </div>
     
    
      

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
