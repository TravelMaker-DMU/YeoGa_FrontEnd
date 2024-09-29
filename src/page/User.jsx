import React from 'react';
import '../styles/User.css';
import UserNavbar from '../components/UserNavbar/UserNavbar';

const User = () => {

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);
  
  // 요일을 계산하는 함수 (6월 가정)
  const getDayOfWeek = (date) => {
    const june2024 = new Date(2024, 5, date);  // 5는 6월을 나타냅니다 (JavaScript는 0부터 시작)
    return june2024.getDay();  // 0: 일요일, 6: 토요일
  };

  return (
    <div className="User-page">
      <UserNavbar/>
      <div className="calendar-container">
        <h2 className='calendar-title'>JUNE</h2>
        <div className="calendar-grid">
          {daysOfWeek.map(day => (
            <div className="calendar-day" key={day}>{day}</div>
          ))}
          {dates.map(date => {
            const dayOfWeek = getDayOfWeek(date);
            const isSunday = dayOfWeek === 6;  // 일요일
            const isSaturday = dayOfWeek === 5;  // 토요일
            
            return (
              <div 
                className={`calendar-date ${date === 25 ? 'highlight' : ''} 
                ${isSunday ? 'sunday' : ''} ${isSaturday ? 'saturday' : ''}`} 
                key={date}
              >
                {date}
              </div>
            );
          })}
        </div>
      </div>

      <div className="User-Right-Sidebar-Container">
      <div className="Weather-widget">
        <div className='Weather-title-Container'>
        <h3 className='Weather-title'>서울특별시</h3>
        </div>
        <div className="weather-icon">🌤</div>
        <p>23°C</p>
      </div>
      <div className="schedule-widget">
        <h3>일정</h3>
        <div className="schedule-item">미팅 1</div>
        <div className="schedule-item">미팅 2</div>
      </div>
    </div>
    </div>
  );
};

export default User;
