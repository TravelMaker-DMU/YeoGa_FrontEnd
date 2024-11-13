import React, { useState } from 'react';
import moment from 'moment-timezone';
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css'; // 추가된 스타일 파일

moment.locale('ko');
const localizer = momentLocalizer(moment);

// 랜덤 색상을 생성하는 함수
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Calendars = () => {
  const [events, setEvents] = useState([
    {
      title: 'Pauline Rain Meeting (작성: 오전 8:00)',
      start: new Date(2024, 1, 5, 8, 0),
      end: new Date(2024, 1, 5, 10, 0),
      allDay: false,
      color: getRandomColor(),
      createdTime: new Date(2024, 1, 5, 8, 0),
    },
    {
      title: 'Sophie Li Meeting (작성: 오전 9:00)',
      start: new Date(2024, 1, 6, 8, 0),
      end: new Date(2024, 1, 6, 9, 0),
      allDay: false,
      color: getRandomColor(),
      createdTime: new Date(2024, 1, 6, 9, 0),
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', startTime: '', endTime: ''  });

  const handleAddEvent = () => {
    const { title, date, startTime, endTime } = newEvent;
    if (title && date && startTime && endTime) {
      const start = new Date(`${date}T${startTime}`);
      const end = new Date(`${date}T${endTime}`);
      const createdTime = new Date(); // 이벤트가 추가된 시간 기록
      const createdTimeFormatted = moment(createdTime).format('YYYY년 MM월 DD일'); // 오전/오후 시간 포맷

      setEvents([
        ...events,
        {
          title: `${title}(작성: ${createdTimeFormatted})`,
          start,
          end,
          allDay: false,
          color: getRandomColor(),
          createdTime,
        },
      ]);
      setShowModal(false);
      setNewEvent({ title: '', date: '', startTime: '', endTime: '' });
    } else {
      alert('모든 필드를 입력해주세요.');
    }
  };

  // 이벤트의 스타일을 설정하는 함수
  const eventPropGetter = (event) => {
    const style = {
      backgroundColor: event.color,
      color: 'white',
      fontSize: '0.9em',
      padding: '2px 4px', // 패딩을 줄여서 셀에 맞게 조정
      borderRadius: '0px', // 둥근 모서리를 없애서 셀에 더 맞게 설정
      border: '1px solid #007bff',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center', // 세로 중앙 정렬
      height: '100%', // 셀의 전체 높이를 차지하도록 설정
    };

    return {
      style,
    };
  };

  return (
    <div className="schedule-container">
      <UserNavbar />
      <div className="calendar-section">
        <div className="calendar">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '700px' }}
            timeslots={1}
            components={{
              toolbar: CustomToolbar,
            }}
            eventPropGetter={eventPropGetter} // 이벤트 스타일 적용
          />
          <button className="add-event-btn" onClick={() => setShowModal(true)}>이벤트 추가</button>
        </div>
      </div>

      {/* 이벤트 추가 모달 */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-button" onClick={() => setShowModal(false)}>X</button>
            <h2>이벤트 추가</h2>
            <form className="User-FAQ-form">
              <div>
                <label>제목:</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  placeholder="Event Title"
                />
              </div>
              <div>
                <label>날짜:</label>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                />
              </div>
              <div>
                <label>시작 시간:</label>
                <input
                  type="time"
                  value={newEvent.startTime}
                  onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
                />
              </div>
              <div>
                <label>종료 시간:</label>
                <input
                  type="time"
                  value={newEvent.endTime}
                  onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
                />
              </div>
              <div className="modal-buttons">
                <button className="save-btn" onClick={handleAddEvent}>저장</button>
                <button className="User-FAQ-close-button" onClick={() => setShowModal(false)}>닫기</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// 커스텀 툴바 컴포넌트
function CustomToolbar({ label, onNavigate, onView, view }) {
  moment.tz.setDefault('Asia/Seoul');

  const firstDatePart = label.split(' - ')[0];
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

export default Calendars;
