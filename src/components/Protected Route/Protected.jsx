import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('accessToken'); // 또는 sessionStorage 사용 가능

  if (!token) {
    
    return <Navigate to="/Login" />;
  }

  return children;
};

export default PrivateRoute;
