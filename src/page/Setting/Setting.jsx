import React, { useState, useEffect } from 'react';
import api from '../../api'; // 전역 설정된 axios 인스턴스 import
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import '../Setting/Setting.css';

const Setting = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    tel: '',
    birthday: '',
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const username = sessionStorage.getItem('username');
        if (!username) {
          setError('로그인 정보가 없습니다. 다시 로그인 해주세요.');
          return;
        }

        // 전역 설정된 api 인스턴스를 사용해 사용자 정보 가져오기
        const response = await api.get(`/my/${username}`);
        console.log(response.data);

        setUserInfo(response.data);
      } catch (error) {
        console.error('사용자 정보를 가져오는 데 실패했습니다:', error);
        setError('사용자 정보를 가져오는 데 실패했습니다.');
      }
    };

    fetchUserInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!userInfo) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="Setting-page">
      <UserNavbar />
      <div className="Setting-page-container">
        <div className="Setting-page-container-section">
          <div className="Setting-page-container-User-img"></div>
          <div className="Setting-page-container-User-imgchange">프로필 변경하기</div>
          <div className="Setting-page-User">사용자 정보</div>

          <form>
            <div className="Setting-page-form-div">
              <div className='Setting-page-form-title'>
                <div className='Setting-page-form-text'>
                  <p className="Setting-page-file">이름</p>
                </div>
              </div>
              <input
                type="text"
                name="name"
                value={userInfo.username || ''}
                onChange={handleChange}
                readOnly // 아이디는 수정 불가능하게 설정
              />
            </div>

            <div className="Setting-page-form-div">
              <p className="Setting-page-file">이메일</p>
              <input
                type="text"
                name="email"
                value={userInfo.email || ''}
                onChange={handleChange}
              />
            </div>
       
          
            
            <div className="Setting-page-form-div">
              <p className="Setting-page-file">전화번호</p>
              <input
                type="text"
                name="tel"
                value={userInfo.tel || ''}
                onChange={handleChange}
              />
            </div>

            <div className="Setting-page-form-div">
              <p className="Setting-page-file">생년월일</p>
              <input
                type="text"
                name="birthday"
                value={userInfo.birthday || ''}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
