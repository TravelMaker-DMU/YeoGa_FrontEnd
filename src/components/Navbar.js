import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showSubmenu, setShowSubmenu] = useState(false);
    const timerRef = useRef(null);

    const handleLoginClick = () => {
        navigate('/Login');
    };

    const handleMouseEnter = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current); // 마우스가 다시 들어오면 타이머 취소
        }
        setShowSubmenu(true); // 서브메뉴 전체 표시
    };

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            setShowSubmenu(false); 
        }, 100); 
    };

    return (
        <nav className="navbar">
            <div className="logo">LOGO</div>
            <ul className="nav-links"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <li><Link to="/">홈</Link></li>
                <li><Link to="/about">테마</Link></li>
                <li><Link to="/Trip">여행지</Link></li>
                <li><Link to="/content">고객센터</Link></li>
            </ul>
            {showSubmenu && (
                <div className="submenu-container"
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                >
                    <ul className="submenu">
                        <div className='submenu-home'>
                            <li><Link to="/home/sub1">홈 서브메뉴 1</Link></li>
                            <li><Link to="/home/sub2">홈 서브메뉴 2</Link></li>
                        </div>
                        <div className='submenu-about'>
                            <li><Link to="/about/sub1">테마 서브메뉴 1</Link></li>
                            <li><Link to="/about/sub2">테마 서브메뉴 2</Link></li>
                        </div>
                        <div className='submenu-trip'>
                            <li><Link to="/trip/sub1">여행지 서브메뉴 1</Link></li>
                            <li><Link to="/trip/sub2">여행지 서브메뉴 2</Link></li>
                        </div>
                        <div className='submenu-content'>
                            <li><Link to="/content/sub1">고객센터 서브메뉴 1</Link></li>
                            <li><Link to="/content/sub2">고객센터 서브메뉴 2</Link></li>
                        </div>
                    </ul>
                </div>
            )}
            <button className="login-btn" onClick={handleLoginClick}>로그인</button>
        </nav>
    );
};

export default Navbar;
