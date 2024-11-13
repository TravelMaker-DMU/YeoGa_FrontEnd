import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Map, Polyline, CustomOverlayMap } from 'react-kakao-maps-sdk';
import '../Tripsub/Tripsub.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const KAKAO_API_KEY = '892b3fa8ad217de4b2ca0cae7c1ca67b';


const fetchDirections = async (origin, destination, waypoints) => {
    try {
        const response = await axios.post(
            'https://apis-navi.kakaomobility.com/v1/waypoints/directions',
            {
                origin: { x: origin.lng, y: origin.lat },
                destination: { x: destination.lng, y: destination.lat },
                waypoints: waypoints.map((point, index) => ({
                    name: `waypoint${index}`,
                    x: point.lng,
                    y: point.lat,
                })),
                priority: 'RECOMMEND',
                car_fuel: 'GASOLINE',
                car_hipass: false,
                alternatives: false,
                road_details: false,
            },
            {
                headers: {
                    Authorization: `KakaoAK ${KAKAO_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching directions:', error);
        return null;
    }
};

const Tripsub = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const homeButton = () => {
        navigate('/');
    }
    const { origin, destination, waypoints, tripInfo } = location.state;
    

    const [route, setRoute] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (origin && destination) {
            fetchDirections(origin, destination, waypoints)
                .then((directions) => {
                    if (directions && directions.routes) {
                        setRoute(directions.routes[0]);
                    } else {
                        setError('경로를 가져오는 데 실패했습니다.');
                    }
                })
                .catch(() => setError('API 요청 중 오류가 발생했습니다.'));
        } else {
            setError('출발지와 목적지를 설정하세요.');
        }
    }, [origin, destination, waypoints]);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="Tripsub-container" style={{ display: 'flex' }}>
            <div className="Tripsub-map" style={{ width: '70%', height: '100vh' }}>
                <Map
                    center={origin || { lat: 37.5665, lng: 126.9780 }}
                    style={{ width: '100%', height: '100%' }}
                    level={3}
                >
                    {/* 출발지 마커 */}
                    {origin && (
                        <CustomOverlayMap position={{ lat: origin.lat, lng: origin.lng }} yAnchor={1}>
                            <div
                                style={{
                                    backgroundColor: 'blue',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                }}
                            >
                                1
                            </div>
                        </CustomOverlayMap>
                    )}

                    {/* 경유지 마커 */}
                    {waypoints && waypoints.map((point, index) => (
                        <CustomOverlayMap
                            key={index}
                            position={{ lat: point.lat, lng: point.lng }}
                            yAnchor={1}
                        >
                            <div
                                style={{
                                    backgroundColor: 'blue',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                }}
                            >
                                 {index + 2}
                            </div>
                        </CustomOverlayMap>
                    ))}

                    {/* 목적지 마커 */}
                    {destination && (
                        <CustomOverlayMap position={{ lat: destination.lat, lng: destination.lng }} yAnchor={1}>
                            <div
                                style={{
                                    backgroundColor: 'blue',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '30px',
                                    height: '30px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                }}
                            >
                                3
                            </div>
                        </CustomOverlayMap>
                    )}

                    {/* 경로 폴리라인 */}
                    {route && route.sections && (
                        <Polyline
                            path={route.sections.flatMap((section) =>
                                section.roads.flatMap((road) =>
                                    road.vertexes.reduce((acc, vertex, idx) => {
                                        if (idx % 2 === 0) {
                                            acc.push({ lng: vertex, lat: road.vertexes[idx + 1] });
                                        }
                                        return acc;
                                    }, [])
                                )
                            )}
                            strokeWeight={5}
                            strokeColor="black"
                            strokeOpacity={0.7}
                            strokeStyle="solid"
                        />
                    )}
                </Map>
            </div>

            <div className="Tripsub-info">
                <h2>여행지 정보</h2>
                {tripInfo && (
                    <div style={{ display: 'flex', marginBottom: '15px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
                        <img src={tripInfo.image} alt={tripInfo.name} style={{ width: '170px', height: '150px', borderRadius: '8px' }} />
                        <div className='Tripsub-info-list'>
                            <p style={{ fontWeight: 'bold' }}>{tripInfo.name}</p>
                            <p>주소: {tripInfo.address}</p>
                            <p>{tripInfo.time}</p>
                        </div>
                    </div>
                )}

                {/* 추가 위치들 표시 */}
                {tripInfo.additionalLocations && tripInfo.additionalLocations.map((location, index) => (
                    <div key={index} style={{ display: 'flex', marginBottom: '15px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>  
                        <div className='Location-img'>
                        <img src={location.image} alt={location.name} style={{objectFit: 'cover', width: '170px', height: '150px', borderRadius: '8px' }} />
                        </div>
                        <div className='Tripsub-info-list'>
                        <p style={{ fontWeight: 'bold' }}>{location.name}</p>
                        <p>주소: {location.address}</p>
                        <p>{location.time}</p>
                        </div>
                      
                    </div>
                ))}
                
                <button className="Tripsub-button" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }} onClick={homeButton}>
                    나가기
                </button>
            </div>
        </div>
    );
};

export default Tripsub;
