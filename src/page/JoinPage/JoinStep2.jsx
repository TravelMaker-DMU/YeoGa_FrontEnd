import React, { useState } from 'react';
import './JoinStep2.css'; // 스타일을 위한 CSS 파일
const JoinStep2 = () => {
  const [form, setForm] = useState({
    koreanName: '',
    englishFirstName: '',
    englishLastName: '',
    userId: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.koreanName) {
      newErrors.koreanName = '한글 이름 입력이 필요합니다.';
    }
    if (!form.englishFirstName || !form.englishLastName) {
      newErrors.englishName = '영문 성명 입력이 필요합니다.';
    }
    if (!form.userId) {
      newErrors.userId = '아이디 항목 입력이 필요합니다.';
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    // 유효성 검사가 성공하면 다음 단계로 이동하는 로직을 추가합니다.
  };

  return (
    <div className="join-container">
      <h2>회원가입</h2>
      <p>회원 정보 입력</p>

      <form onSubmit={handleSubmit} className="join-form">
        <p className="required-info">* 은 필수입력 항목입니다.</p>

        <div className="form-group">
          <label htmlFor="koreanName">한글 이름 *</label>
          <input
            type="text"
            id="koreanName"
            name="koreanName"
            placeholder="이름을 입력해 주세요."
            value={form.koreanName}
            onChange={handleChange}
            className={errors.koreanName ? 'error-input' : ''}
          />
          {errors.koreanName && <p className="error-message">{errors.koreanName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="englishLastName">영문 성명 *</label>
          <div className="english-name-group">
            <input
              type="text"
              id="englishLastName"
              name="englishLastName"
              placeholder="영문 성을 입력해 주세요."
              value={form.englishLastName}
              onChange={handleChange}
              className={errors.englishName ? 'error-input' : ''}
            />
            <input
              type="text"
              id="englishFirstName"
              name="englishFirstName"
              placeholder="영문 이름을 입력해 주세요."
              value={form.englishFirstName}
              onChange={handleChange}
              className={errors.englishName ? 'error-input' : ''}
            />
          </div>
          {errors.englishName && <p className="error-message">{errors.englishName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="userId">아이디 *</label>
          <div className="user-id-group">
            <input
              type="text"
              id="userId"
              name="userId"
              placeholder="사용할 아이디를 입력해 주세요."
              value={form.userId}
              onChange={handleChange}
              className={errors.userId ? 'error-input' : ''}
            />
            <button type="button" className="check-btn">
              중복확인
            </button>
          </div>
          {errors.userId && <p className="error-message">{errors.userId}</p>}
        </div>

        <button type="submit" className="submit-btn">
          다음 단계로
        </button>
      </form>
    </div>
  );
};

export default JoinStep2;
