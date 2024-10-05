import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('accessToken'); // 또는 sessionStorage 사용 가능

  if (!token) {
    // 로그인이 안 되어 있으면 로그인 페이지로 리디렉션
    return <Navigate to="/Login" />;
  }

  // 로그인이 되어 있으면 요청한 페이지를 렌더링
  return children;
};

export default PrivateRoute;
