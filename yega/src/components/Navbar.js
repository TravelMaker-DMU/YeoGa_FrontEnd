import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    
    const navigate = useNavigate();
    
    const handleLoginClick = () => {
        navigate('/Login');
    } 
    return (
        <nav className="navbar">
            <div className="logo">LOGO</div>
            {/* <link to = "/">LOGO</link> */}
            <ul className="nav-links">
                <li><Link to="/">홈</Link></li>
                <li><Link to="/about">테마</Link></li>
                <li><Link to="/shop">여행지</Link></li>
                <li><Link to="/content">고객센터</Link></li>
            </ul>
            <button className="login-btn" onClick={handleLoginClick}>LOGIN</button>
        </nav>
    );
}

export default Navbar;