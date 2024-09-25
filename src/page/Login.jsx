import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import '../styles/Login.css';
import googleicon from "../images/icon/google-icon.png";
import kakaoicon from "../images/icon/kakao-icon.png";
import facebookicon from "../images/icon/facebook.png";
import logo from  '../images/yega-logo.png';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(''); // 이메일 상태 관리
  const [password, setPassword] = useState(''); // 비밀번호 상태 관리
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
  
    try {
      const response = await fetch('http://localhost:8080/login', { // 백엔드 URL 수정 필요 시 변경
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password }), // 요청 데이터
      });
  
      console.log(response); // 응답 상태 확인
      if (response.ok) {
         const data = await response.json();
         const token = data.token; 
         console.log('Token:', token); // 토큰 확인
         localStorage.setItem('token', token); // 토큰 저장
         alert('로그인 성공!');
         navigate('/'); 

      } else {
        const errorData = await response.json();
        alert(`로그인 실패: ${errorData.message || '아이디 또는 비밀번호가 올바르지 않습니다.'}`);
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
      alert('로그인 요청 중 오류가 발생했습니다.');
    }
};

  

  const loginJoin = () => {
    navigate('/Join'); // 회원가입 페이지로 이동
  };

  return (
    <div className="Login">
      <Navbar />
      <div className="background-image">
        <div className="content">
          <img src={logo} alt="logo" className="Login-logo" />
        </div>

        <div className="login-form">
          <form onSubmit={handleLogin}> {/* 로그인 함수 연결 */}
            <div className="input-group">
              <input
                type="text" 
                placeholder="Email"
                className="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // 상태 업데이트
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // 상태 업데이트
              />
            </div>
            <div className="login-box">
              <p className="login-id" onClick={() => alert('아이디 찾기 기능')}>아이디 찾기 /</p>
              <p className="login-pass" onClick={() => alert('비밀번호 찾기 기능')}>비밀번호 찾기 /</p>
              <p className="login-join" onClick={loginJoin}>회원가입 </p>
            </div>
            <button type="submit" className="Loginbutton">로그인</button>
          </form>

          <div className="social-login">
            <div className="social-icons">
              <div className="facebook-box">
                <img src={facebookicon} alt="Naver" className="facebook" />
                <div className="facebook-text">
                  <p>페이스북 로그인</p>
                </div>
              </div>

              <div className="kakao-box">
                <img src={kakaoicon} alt="Kakao" className="kakao" />
                <div className="kakao-text">
                  <p>카카오 로그인</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
