import React, { useState } from 'react';
import moment from 'moment-timezone';
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css'; // 추가된 스타일 파일

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Pauline Rain Meeting',
    start: new Date(2024, 1, 5, 8, 0),
    end: new Date(2024, 1, 5, 10, 0),
    allDay: false,
  },
  
  {
    title: 'Sophie Li Meeting',
    start: new Date(2024, 1, 6, 8, 0),
    end: new Date(2024, 1, 6, 9, 0),
    allDay: false,
  },
  {
    title: 'Marina Elev Meeting',
    start: new Date(2024, 1, 6, 9, 30),
    end: new Date(2024, 1, 6, 13, 0),
    allDay: false,
  },
  {
    title: 'Marina Elev Task',
    start: new Date(2024, 1, 6, 13, 30),
    end: new Date(2024, 1, 6, 14, 30),
    allDay: false,
  },
];

// 커스텀 툴바 컴포넌트
function CustomToolbar({ label, onNavigate, onView, view }) {
    // 한국 타임존을 명시적으로 설정
    moment.tz.setDefault('Asia/Seoul');

    const firstDatePart = label.split(' - ')[0]; // 첫 번째 날짜 추출
    const validDate = moment(firstDatePart, 'MMMM D').isValid() 
      ? moment(firstDatePart, 'MMMM D').format('YYYY년 MM월') 
      : "유효하지 않은 날짜";

    return (
      <div className="custom-toolbar">
        <div className='Schedule-header-toolbar-container'>
          <div className="toolbar-center">
            <button className="arrow-btn" onClick={() => onNavigate('PREV')}>&#8592;</button>
            <span className="rbc-toolbar-label">{validDate}</span>
            <button className="arrow-btn" onClick={() => onNavigate('NEXT')}>&#8594;</button>
          </div>
        </div>

        <div className="toolbar-right">
          <span className="rbc-btn-group">
            <button onClick={() => onView('today')} className={view === 'today' ? 'rbc-active' : ''}>Today</button>
            <button onClick={() => onView('month')} className={view === 'month' ? 'rbc-active' : ''}>Month</button>
            <button onClick={() => onView('week')} className={view === 'week' ? 'rbc-active' : ''}>Week</button>
            <button onClick={() => onView('day')} className={view === 'day' ? 'rbc-active' : ''}>Day</button>
            <button onClick={() => onView('agenda')} className={view === 'agenda' ? 'rbc-active' : ''}>Agenda</button>
          </span>
        </div>
      </div>
    );
}


const Calendars = () => {
  const [showModal, setShowModal] = useState(false);
 
  return (
    <div className="schedule-container">
      <UserNavbar />

      {/* 중앙 달력 부분 */}
      <div className="calendar-section">
        <div className="calendar">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{height: '500px' }}
            components={{
              toolbar: CustomToolbar, // 커스텀 툴바 사용
            }}
          />
          <button className="add-event-btn" onClick={() => setShowModal(true)}>이벤트 추가</button>
        </div>
        
      </div>
     

      {/* 이벤트 추가 모달 */}
      {showModal && (
        <div className="modal">
          <h2>이벤트 추가</h2>
          <div>
            <label>제목:</label>
            <input type="text" placeholder="Event Title" />
          </div>
          <div>
            <label>시간:</label>
            <input type="time" />
          </div>
          <div>
            <label>날짜:</label>
            <input type="date" />
          </div>
          <button className="save-btn" onClick={() => setShowModal(false)}>저장</button>
        </div>
      )}
    </div>
  );
}

export default Calendars;


