import React from 'react';
import { useNavigate } from 'react-router-dom'; // 정확한 useNavigate 훅 임포트
import './UserNavbar.css';


import home from '../../images/icon/icons8-home-50.png';
import Reservation from '../../images/icon/icons8-today-50.png';
import bookmark from '../../images/icon/icons8-bookmark-50.png';
import calander from '../../images/icon/icons8-calendar-plus-50.png';
import Chat from '../../images/icon/icons8-chat-bubble-50.png';
import FAQ from '../../images/icon/icons8-faq-50.png';
import setting from '../../images/icon/icons8-settings-50.png';
import logout from '../../images/icon/icons8-logout-50.png';

const UserNavbar = () => {
  const navigate = useNavigate(); // useNavigate 훅을 컴포넌트 내부에서 사용
  


  
  // 각 메뉴에 대응하는 경로 설정
  const navItems = [
    { icon: home, label: '홈', path: '/' },
    { icon: Reservation, label: '일정', path: '/User/Schedule' },
    { icon: bookmark, label: '북마크', path: '/bookmark' },
    { icon: calander, label: '캘린더', path: '/calendar' },
    { icon: Chat, label: '1:1 AI Chat', path: '/chat' },
    { icon: FAQ, label: 'FAQ', path: '/User/FAQ' },
    { icon: setting, label: '설정', path: '/User/Setting' }, // 콜론 사용하여 onClick 설정
    { icon: logout, label: '로그아웃', path: '/logout' },
  ];

  return (
    <div className="User-Navbar">
      <div className="User-section">
        <div className="profile-pic"></div>
        <div className="User-name">UserName</div>
      </div>
      <ul className="nav-items">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            label={item.label}
            onClick={item.onClick ? item.onClick : () => navigate(item.path)} // onClick이 있으면 사용, 없으면 path로 이동
          />
        ))}
      </ul>
    </div>
  );
};

// NavItem 컴포넌트: 클릭 이벤트 추가
const NavItem = ({ icon, label, onClick }) => {
  return (
    <li className="nav-item" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img className="icon" src={icon} alt={label} />
      <span>{label}</span>
    </li>
  );
};

export default UserNavbar;
