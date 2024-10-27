import React, { useState } from 'react';
import axios from 'axios';

const Test2 = () => {
  const [touristData, setTouristData] = useState([]);
  const [error, setError] = useState(null);

  // 인코딩 없이 API 키 사용
  const serviceKey = process.env.REACT_APP_API_KEY_openapi;
  const url = 'https://apis.data.go.kr/B551011/TarRlteTarService/areaBasedList';

  const fetchTouristData = async () => {
    try {
      const response = await axios.get(url, {
        params: {
          serviceKey: serviceKey,
          numOfRows: '12',
          pageNo: '1',
          MobileOS: 'ETC',
          MobileApp: 'AppTest',
          _type: 'json',
          baseYm: '202408',
          areaCd: '41',
          signguCd: '41131'
        }
      });

      console.log("API 응답 전체:", response.data);

      if (response.data && response.data.response && response.data.response.header) {
        if (response.data.response.header.resultCode === "0000") {
          setTouristData(response.data.response.body.items.item || []);
          setError(null);
        } else {
          setError(`에러 코드 ${response.data.response.header.resultCode}: ${response.data.response.header.resultMsg}`);
        }
      } else {
        setError('서버로부터 예상하지 못한 응답을 받았습니다.');
      }
    } catch (err) {
      console.error("Error:", err);
      console.error("Error response data:", err.response?.data);

      if (err.response?.data?.includes('SERVICE KEY IS NOT REGISTERED ERROR')) {
        setError('유효하지 않은 서비스 키입니다. 공공데이터 포털에서 올바른 키를 확인하세요.');
      } else if (err.response?.data?.includes('Service Not Found')) {
        setError('잘못된 API 요청입니다. URL과 파라미터를 확인하세요.');
      } else {
        setError('관광지 정보를 가져오는 데 실패했습니다.');
      }

      setTouristData([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTouristData();
  };

  return (
    <div className="tourist-container">
      <h2>관광지 정보</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Get Tourist Info</button>
      </form>

      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}

      {touristData.length > 0 && (
        <div className="tourist-info">
          <ul>
            {touristData.map((item, index) => (
              <li key={index}>
                <h3>{item.tAtsNm}</h3>
                <p>기본 주소: {item.rlteBsicAdres}</p>
                <p>{item.rlteTatsNm}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Test2;
