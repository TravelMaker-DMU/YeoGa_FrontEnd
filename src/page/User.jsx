import React, { useState } from 'react';
import '../styles/User.css';
import UserNavbar from '../components/UserNavbar/UserNavbar';

const User = () => {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const [currentDate, setCurrentDate] = useState(new Date(2024, 9)); // 초기 날짜를 6월로 설정

  // 현재 월의 날짜 수를 계산하는 함수
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // 이전 달로 이동하는 함수
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  // 다음 달로 이동하는 함수
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  // 현재 월의 날짜 수와 시작 요일을 계산
  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  // 날짜 배열 생성 (빈칸 포함)
  const dates = Array.from({ length: firstDayOfMonth + daysInMonth }, (_, i) => {
    const date = i >= firstDayOfMonth ? (i - firstDayOfMonth + 1).toString().padStart(2, '0') : null;
    return date;
  });

  return (
    <div className="User-page">
      <UserNavbar/>
     
      <div className="calendar-container">

      <div className="calendar-container-header">
        <div className='User-calendar-container-header-title'>
          <button className='User-calender-button' onClick={goToPreviousMonth}>◀</button>
          <h2 className='calendar-title'>{currentDate.getFullYear()}년 {currentDate.toLocaleString('default', { month: 'long' })} </h2>
          <button className='User-calender-button' onClick={goToNextMonth}>▶</button>
          </div>
        </div>  

        <div className="calendar-grid">
          {daysOfWeek.map(day => (
            <div className="calendar-day" key={day}>{day}</div>
          ))}
          {dates.map((date, index) => {
            // 일요일과 토요일 클래스 적용
            const dayOfWeek = (index % 7);
            const isSunday = dayOfWeek === 0;
            const isSaturday = dayOfWeek === 6;

            return (
              <div 
                className={`calendar-date ${date === 25 && currentDate.getMonth() === 5 ? 'highlight' : ''} 
                ${isSunday ? 'sunday' : ''} ${isSaturday ? 'saturday' : ''}`} 
                key={index}
              >
                {date ? date : ''}
              </div>
            );
          })}
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
