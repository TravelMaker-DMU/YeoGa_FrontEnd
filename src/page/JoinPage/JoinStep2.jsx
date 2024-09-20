import React, { useState } from 'react';
import './JoinStep2.css'; // CSS 파일 임포트

function JoinStep2() {
  // 상태 관리: 각각의 입력 필드에 대한 상태를 관리합니다.
  const [koreanName, setKoreanName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className='Join-Step2'>
    <div className='Join-Step2-title-container'>
      <h2 className='Join-Step2-title-text'>회원가입</h2>
    </div>
    <div className="form-container">
      {/* 한글 이름 입력 필드 */}
      <div className="form-group">
        <label htmlFor="koreanName">한글 이름 *</label>
        <input
          type="text"
          id="koreanName"
          value={koreanName}
          onChange={(e) => setKoreanName(e.target.value)}
          placeholder="이름을 입력해 주세요."
        />
      </div>

 

      {/* 아이디 입력 필드 */}
      <div className="form-group">
        <label htmlFor="id">아이디 *</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="사용할 아이디를 입력해 주세요."
        />
        <button type="button" className="check-button">중복확인</button>
      </div>

      {/* 비밀번호 입력 필드 */}
      <div className="form-group">
        <label htmlFor="password">비밀번호 *</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해 주세요."
        />
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="비밀번호를 한 번 더 입력해 주세요."
        />
      </div>
    </div>
    </div>
  );
}

export default JoinStep2;
