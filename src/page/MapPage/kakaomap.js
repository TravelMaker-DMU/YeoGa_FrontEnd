import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Map, Polyline, MapMarker, KakaoMapContext } from 'react-kakao-maps-sdk';
import './maps.css';
import logo from '../../images/yega1.png';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer'

const KAKAO_API_KEY = 'f2866ffa27f4403047eecb4cc9721bcd';
const DIRECTIONS_URL = 'https://apis-navi.kakaomobility.com/v1/waypoints/directions';

const fetchDirections = async (origin, destination, waypoints) => {
  try {
    const response = await axios.post(
      DIRECTIONS_URL,
      {
        origin: { x: origin.lng, y: origin.lat },
        destination: { x: destination.lng, y: destination.lat },
        waypoints: waypoints.map((point, index) => ({
          name: `waypoint${index}`,
          x: point.lng,
          y: point.lat,
        })),
      },
      {
        headers: {
          Authorization: `KakaoAK ${KAKAO_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('API response:', response.data); // 응답 데이터 출력
    return response.data;
  } catch (error) {
    console.error('Error fetching directions:', error.response || error.message);
    return null;
  }
};

const extractPathFromVertexes = (vertexes) => {
  const path = [];
  for (let i = 0; i < vertexes.length; i += 2) {
    if (vertexes[i + 1] !== undefined) {
      path.push({ lat: vertexes[i + 1], lng: vertexes[i] });
    }
  }
  return path;
};
/*
const KakaoMapComponent = () => {
  useEffect(() => {
    // Kakao 지도 API를 로드합니다.
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=e217849fe3b2f41592796e71cd330f6a&autoload=false`; // autoload=false로 설정
    script.async = true;
    script.onload = () => {
      // SDK 로드 후 kakao 객체 사용
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);
      });
    };
    document.head.appendChild(script);
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};
*/
const RouteMap = ({ origin, destination, waypoints }) => {
  const [route, setRoute] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRoute = async () => {
      const directions = await fetchDirections(origin, destination, waypoints);
      console.log('Directions response:', directions);
      if (directions && directions.routes && directions.routes[0]) {
        setRoute(directions.routes[0]); // 첫 번째 경로를 설정
      } else {
        setError('경로를 가져오는데 실패했습니다');
      }
    };

    getRoute();
  }, [origin, destination, waypoints]);

  if (error) {
    return <div className='error-message'>{error}</div>;
  }

  return (
    <div className="kakaomap">
    <header className="logo"><Navbar /></header>
    <div className="container">
      <div className="title">경로 안내 지도</div>
      <div className="map-container">
        <Map
          center={{ lat: origin.lat, lng: origin.lng }} // 출발지 좌표로 중심 설정
          style={{ width: '100%', height: '400px' }} // 높이 및 너비 조정
          level={3} // 지도 확대 레벨
        >
          {/* 출발지 마커 */}
          <MapMarker position={{ lat: origin.lat, lng: origin.lng }} />

          {/* 도착지 마커 */}
          <MapMarker position={{ lat: destination.lat, lng: destination.lng }} />

          {/* 경유지 마커 */}
          {waypoints.map((point, index) => (
            <MapMarker key={index} position={{ lat: point.lat, lng: point.lng }} />
          ))}

          {/* 경로 폴리라인 */}
          {route && (
            <Polyline
              path={route.sections.flatMap(section =>
                section.roads.flatMap(road => extractPathFromVertexes(road.vertexes))
              )}
              strokeWeight={5}
              strokeColor="#FF0000"
              strokeOpacity={0.7}
              strokeStyle="solid"
            />
          )}
        </Map>
      </div>

      <div className="location-info">
        <h3>수원시</h3>
        {waypoints.map((point, index) => (
          <div key={index} className="location-item">
            <h4>{`장소 ${index + 1}`}</h4>
            <p>여행하는 장소의 간략한 설명</p>
          </div>
        ))}
      </div>
    </div>
    <footer className="mapfooter"><Footer /></footer>
    </div>
  );
};

export default RouteMap;