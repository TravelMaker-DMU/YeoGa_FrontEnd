// src/api.js
import axios from 'axios';

const apiUrl = 'https://port-0-yeoga-backend-m1hgzlk8a26c4004.sel4.cloudtype.app';

const api = axios.create({
  baseURL: apiUrl,
});

// reissueAccessToken 함수도 이 파일에 넣기
const reissueAccessToken = async () => {
  try {
    const response = await axios.post(`${apiUrl}/reissue`, {}, {
      withCredentials: true,
    });
    const newAccessToken = response.data.accessToken;
    sessionStorage.setItem('accessToken', newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error('엑세스 토큰 재발급 실패:', error);
    throw error;
  }
};

api.interceptors.request.use(async (config) => {
  let token = sessionStorage.getItem('accessToken');
  if (token) {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000);

    if (currentTime > payload.exp) {
      console.log('토큰이 만료되었습니다. 새로운 토큰을 요청합니다.');
      try {
        token = await reissueAccessToken(); 
      } catch (error) {
        console.error('새로운 토큰 발급 실패');
        // 로그아웃 또는 리다이렉트 로직을 여기에 추가할 수 있습니다.
      }
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
