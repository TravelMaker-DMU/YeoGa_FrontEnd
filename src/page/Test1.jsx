import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
    width: '100%',
    height: '400px'
    };

const center = {
    lat: 40.7749, // 위도
    lng: -122.4194 // 경도
    };


const Test1 = () => {
    return (
        <LoadScript googleMapsApiKey={apiKey}> {/* Google Maps API 키 사용 */}
          <div className="map-container"> {/* CSS 클래스 이름 적용 */}
            <GoogleMap
              mapContainerStyle={containerStyle} 
              center={center} 
              zoom={10}
            >
              <Marker position={center} />
            </GoogleMap>
          </div>
        </LoadScript>
      );
    }

export default Test1;



// import React, { useEffect } from 'react';

// const Test1 = () => {
//   useEffect(() => {
//     // 카카오 지도 API 스크립트 동적 로드
//     const script = document.createElement('script');
//     script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=4f72f593b616116bfb0d511f9a15c03c`;
//     script.async = true;
//     document.head.appendChild(script);

//     // 스크립트가 로드되면 지도 초기화
//     script.onload = () => {
//       window.kakao.maps.load(() => {
//         const container = document.getElementById('map'); // 지도를 표시할 div
//         const options = {
//           center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 예시: 서울의 중심 좌표
//           level: 3, // 지도 확대 수준
//         };
//         const map = new window.kakao.maps.Map(container, options); // 지도 생성

//         // 마커 생성
//         const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.9780); // 마커가 표시될 위치
//         const marker = new window.kakao.maps.Marker({
//           position: markerPosition,
//         });
//         marker.setMap(map); // 마커를 지도에 표시
//       });
//     };
//   }, []);

//   return (
//     <div>
//       <h1>카카오 지도 예시</h1>
//       <div id="map" style={{ width: '100%', height: '400px' }}></div>
//     </div>
//   );
// };

// export default Test1;
