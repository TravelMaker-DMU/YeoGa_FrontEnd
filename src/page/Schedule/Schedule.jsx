import React, { useState } from 'react';
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Schedule.css'; // 추가된 스타일 파일

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
    // moment의 한국어 로케일 적용
    moment.locale('ko'); // 로케일을 명시적으로 'ko'로 설정
  
    console.log('label:', label);

    let validDate;

  // "October 06 - 12"와 같은 주 단위 형식 처리
  if (label.includes('-')) {
    // "October 06 - 12"에서 첫 번째 날짜 부분만 추출
    const firstDatePart = label.split(' - ')[0];
    validDate = new Date(firstDatePart);
  } else {
    validDate = new Date(label);
  }

    const koreanDate = moment(validDate).isValid() 
      ? moment(validDate).format('YYYY년 MM월') 
      : "유효하지 않은 날짜";
  
    return (

      <div className="custom-toolbar">
        {/* 왼쪽 화살표 버튼 */}
        <div className='Schedule-header-toolbar-container'>
        {/* 중앙에 한국어로 변환된 날짜 텍스트 */}

        <div className="toolbar-center">
        <button className="arrow-btn" onClick={() => onNavigate('PREV')}>&#8592;</button>
          <span className="rbc-toolbar-label">{koreanDate}</span>
          <button className="arrow-btn" onClick={() => onNavigate('NEXT')}>&#8594;</button>
        </div>

        </div>

        {/* 오른쪽에 Today, Month, Week, Day, Agenda 버튼들 */}
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

function Schedule() {
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

export default Schedule;


