import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './JoinStep2.css'; 
import Footer from '../../../components/Footer/Footer';

function JoinStep2() {
  const [koreanName, setKoreanName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [tel, setTel] = useState('');

  const navigate = useNavigate();

  const prevclick = () => {
    navigate('/Join');
  };

  const nextclick = () => {
    navigate('JoinStep3');
  }

  // 전화번호 형식 변환 함수
  const formatPhoneNumber = (value) => {
    // 숫자만 남기기
    const onlyNumbers = value.replace(/\D/g, '');

    // 010-xxxx-xxxx 형식 적용
    if (onlyNumbers.length < 4) {
      return onlyNumbers;
    } else if (onlyNumbers.length < 8) {
      return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3)}`;
    } else {
      return `${onlyNumbers.slice(0, 3)}-${onlyNumbers.slice(3, 7)}-${onlyNumbers.slice(7, 11)}`;
    }
  };

  // 전화번호 입력 핸들러
  const handleTelChange = (e) => {
    const formattedTel = formatPhoneNumber(e.target.value);
    setTel(formattedTel);
  };

  // 회원가입 요청 처리 함수
  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
  
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
  
    // username과 password만 FormData에 추가
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    for (let pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }

    const apiUrl = 'https://port-0-yeoga-backend-m1hgzlk8a26c4004.sel4.cloudtype.app';  

    try {
      const response = await fetch(`${apiUrl}/join`, {
        method: 'POST', 
        credentials: 'include',
        headers: {
          
        },
        body: formData, 
      });

      if (response.ok) {
        alert('회원가입이 성공적으로 완료되었습니다.');
      } else {
        const errorData = await response.json(); // 여기서는 text()로 읽어 오류 메시지 확인
        console.error(`회원가입 실패: ${errorData}`);
        alert(`회원가입 실패: ${errorData}`);
      }
    } catch (error) {
      console.error('회원가입 요청 중 오류가 발생했습니다:', error);
      alert('회원가입 요청 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className='Join-Step2'>
      <div className="Join-title">
        <h2 className="Join-title-text">회원가입</h2>
      </div>

      <div className="Join-step-all">
        <div className="step">1 약관동의</div>
        <div className="step active">2 정보입력</div>
        <div className="step">3 가입완료</div>
      </div>

      <div className='Join-title-sub'>
        <p className='Join-title-textsub'>회원 정보 입력</p>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        {/* 한글 이름 입력 필드 */}
        <fieldset className="form-group">
          <label htmlFor="koreanName">한글 이름 *</label>
          <input
            type="text"
            id="koreanName"
            name="koreanName"
            value={koreanName}
            onChange={(e) => setKoreanName(e.target.value)}
            placeholder="이름을 입력해 주세요."
            required
          />
        </fieldset>
        
        {/* 아이디 입력 필드 */}
        <fieldset className="form-group">
          <label htmlFor="username">아이디 *</label>
          <input
            type="text"
            id="username" 
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="사용할 아이디를 입력해 주세요."
            required
          />
        </fieldset>

        {/* 비밀번호 입력 필드 */}
        <fieldset className="form-group">
          <label htmlFor="password">비밀번호 *</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력해 주세요."
            required
          />
        </fieldset>
        
        <fieldset className="form-group">
          <label htmlFor="confirmPassword">비밀번호 확인 *</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호를 한 번 더 입력해 주세요."
            required
          />
        </fieldset>

        {/* 생년월일 입력 필드 */}
        <fieldset className="form-group">
          <label htmlFor="birthdate">생년월일 *</label>
          <input
            type="text"
            id="birthdate"
            name="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            placeholder="생년월일을 입력해주세요(YYYY-MM-DD)"
            required
          />
        </fieldset>

        {/* 전화번호 입력 필드 */}
        <fieldset className="form-group">
          <label htmlFor="tel">전화번호 *</label>
          <input
            type="text"
            id="tel"
            name="tel"
            value={tel}
            onChange={handleTelChange} // 변경된 핸들러 적용
            placeholder="010-0000-0000"
            required
          />
        </fieldset> 
        
        <div className='next-button2-container'>
          <button type="button" className='prev-button2' onClick={prevclick}>
            이전
          </button>
          <button type="submit" className='next-button2'>
            다음
          </button>
        </div> 
      </form>
     
      <Footer/>
    </div>
  );
}

export default JoinStep2;
