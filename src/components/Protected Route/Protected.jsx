import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // 여기 수정

const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem('accessToken');

  if (!token) {
    return <Navigate to="/Login" />;
  }

  try {
    const decoded = jwtDecode(token);
    console.log(decoded); 
  } catch (error) {
    console.error('Invalid token:', error);
    return <Navigate to="/Login" />;
  }

  return children;
};

export default PrivateRoute;
