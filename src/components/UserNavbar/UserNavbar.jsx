import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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
  const navigate = useNavigate();

  // 로그아웃 함수
  const handleLogout = async () => {
    const token = sessionStorage.getItem('accessToken'); // 토큰 가져오기
    const apiUrl = 'https://port-0-yeoga-backend-m1hgzlk8a26c4004.sel4.cloudtype.app';

    if (!token) {
      alert('로그인 상태가 아닙니다.');
      navigate('/'); 
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/logout`, // 로그아웃 API 엔드포인트
        {}, // 로그아웃 요청에 바디가 필요 없다면 빈 객체를 전달
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.status === 200) {
        // 로그아웃 성공 시 세션 스토리지에서 토큰 제거
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('username');
        alert('로그아웃되었습니다.');
        navigate('/'); // 로그인 페이지로 이동
      }
    } catch (error) {
      console.error('로그아웃 실패:', error);
      alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // 각 메뉴에 대응하는 경로 설정
  const navItems = [
    { icon: home, label: '홈', path: '/'},
    { icon: Reservation, label: '일정'},
    { icon: bookmark, label: '북마크' },
    { icon: calander, label: '캘린더', path: '/User/Calendars' },
    { icon: Chat, label: '1:1 AI Chat' },
    { icon: FAQ, label: 'FAQ', path: '/User/FAQ' },
    { icon: setting, label: '설정', path: '/User/Setting' },
    { icon: logout, label: '로그아웃', onClick: handleLogout }, // 로그아웃 버튼에 함수 연결
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
