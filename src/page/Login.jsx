import React, { useState } from "react";
import Navbar from "../Layout/Header";
import Footer from "../components/Footer/Footer";
import '../styles/Login.css';
import kakaoicon from "../images/icon/kakao-icon.png";
import facebookicon from "../images/icon/facebook.png";
import naver from '../images/icon/naver-icon-style (1).png';
import yega from '../images/aaa.png';
import { json, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState(''); // 이메일 상태 관리
  const [password, setPassword] = useState(''); // 비밀번호 상태 관리
  const navigate = useNavigate();

  // 로그인 요청 함수
  const handleLogin = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지  

    const apiUrl = 'https://port-0-yeoga-backend-m1hgzlk8a26c4004.sel4.cloudtype.app';

    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include', // 쿠키 전송을 포함하도록 설정
      });

      // 응답 상태 확인
      if (response.ok) {
        // 토큰을 응답 헤더에서 가져옴
        const token = response.headers.get('Access');
        if (token) {
          console.log('토큰:', token); 
          sessionStorage.setItem('accessToken', token);    // 토큰 저장
          sessionStorage.setItem('username', username); // username도 저장
          alert('로그인 성공! 메인 페이지로 이동합니다.');
          
          navigate('/'); // 메인 페이지로 이동
         
        } else {
          alert('로그인 성공했으나 토큰이 반환되지 않았습니다.');
        }
      } else {
        let errorMessage = '아이디 또는 비밀번호가 올바르지 않습니다.';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (error) {
          console.error('응답 파싱 중 오류:', error);
        }
        alert(`로그인 실패: ${errorMessage}`);
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
      alert('로그인 요청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  // 회원가입 페이지로 이동하는 함수
  const loginJoin = () => {
    navigate('/Join'); // 회원가입 페이지로 이동
  };

  return (  
    <div className="Login">
      <Navbar />
      <div className="background-image">
        <div className="content">
          <img src={yega} alt="logo" className="Login-logo" />
        </div>

        <div className="login-form">
          <form onSubmit={handleLogin}> {/* 로그인 함수 연결 */}
            <div className="input-group">
              <input
                type="text" 
                placeholder="이메일"
                className="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username" 
                required // 필수 입력 필드로 설정
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="패스워드"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // 상태 업데이트
                autoComplete="password"
                required // 필수 입력 필드로 설정
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
                <img src={naver} alt="Facebook" className="facebook" />
                <div className="facebook-text">
                  <p>네이버 로그인</p>
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
