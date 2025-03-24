import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";

import aaa from '../images/aaa.png'


const Header = () => {
    const navigate = useNavigate();
    const [showSubmenu, setShowSubmenu] = useState(false);
    const timerRef = useRef(null);

    const handleLoginClick = () => {
        navigate('/Login');
    };

    const userPageClick = () => {
        navigate('/User/Setting');
    }

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
        <nav className=' w-full justify-between h-[130px] text-white bg-black/50 backdrop-blur-md '>
            <div className='flex w-full h-[60%] bg-slate-600 px-20'>
                <div className="w-[20%] h-[75px] bg-slate-200">
                    <Link to="/"><img src={aaa} alt="logo" className="w-[150px] h-[75px]" /> </Link>
                </div>
                <div className=''></div>
                <div className='w-[10px]'>
                    <FaRegUser />
                </div>
            </div>



            {/* <ul className="nav-links"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <li>테마</li>
                <li>여행지 안내</li>
                <li><Link to="/Trip">숙소</Link></li>
                <li>고객센터</li>
            </ul>

            {showSubmenu && (
                <div className="submenu-container"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <ul className="submenu">
                        <div className='submenu-home'>
                            <li>홈 서브메뉴1 </li>
                            <li>홈 서브메뉴 2</li>
                        </div>
                        <div className='submenu-about'>
                            <li>테마 서브메뉴 1</li>
                            <li>테마 서브메뉴 2</li>
                        </div>
                        <div className='submenu-trip'>
                            <li>여행지 서브메뉴 1</li>
                            <li>여행지 서브메뉴 2</li>
                        </div>
                        <div className='submenu-content'>
                            <li>고객센터 서브메뉴 1</li>
                            <li>고객센터 서브메뉴 2</li>
                        </div>
                    </ul>
                </div>
            )} */}

        </nav>
    );
};

export default Header;
