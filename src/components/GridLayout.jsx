import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/GridLayout.css';

const GridLayout = () => {
    const [touristSpots, setTouristSpots] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTouristSpots = async () => {
            try {
                const serviceKey = process.env.REACT_APP_API_KEY_openapi;
                const randomPage = Math.floor(Math.random() * 10) + 1;
                const randomAreaCode = Math.floor(Math.random() * 4) + 1;
                
                const response = await axios.get("http://apis.data.go.kr/B551011/KorService1/areaBasedList1", {
                    params: {
                        serviceKey: serviceKey,
                        numOfRows: 8, // 데이터를 8개 가져와서 나눌 예정
                        pageNo: randomPage,
                        MobileOS: 'ETC',
                        MobileApp: 'AppTest',
                        _type: 'json',
                        areaCode: randomAreaCode,
                        contentTypeId: '12',
                        listYN: 'Y',
                        arrange: 'O'
                    }
                });

                if (response.data.response.body.items) {
                    setTouristSpots(response.data.response.body.items.item);
                } else {
                    setError("데이터를 불러오지 못했습니다.");
                }
            } catch (err) {
                setError("API 요청 중 오류가 발생했습니다.");
                console.error(err);
            }
        };

        fetchTouristSpots();
    }, []);

    // 데이터를 반으로 나누어 서로 다른 박스에 전달
    const boxOneData = touristSpots.slice(0, 4); // 첫 4개 데이터
    const boxTwoData = touristSpots.slice(4, 8); // 나머지 4개 데이터

    return (
        <div className="grid-container">
            <div className="GridLayout-trip">
                <h2 className="GridLayout-trip-title">국내 추천 여행지</h2>
            </div>

            <div className="boxone">
                {boxOneData.map((spot, index) => (
                    <div key={index} className={`box box${index + 1}`}>
                        <img src={spot.firstimage || "https://via.placeholder.com/500"} alt={spot.title} />
                        <h3 className="GridLayout-boxone-title">{spot.title}</h3>
                        <p className="GridLayout-boxone-descripts">{spot.addr1}</p>
                        <div className="GridLayout-footer-box">
                            <div className="GridLayout-footer-box-left">{spot.areacode}</div>
                            <div className="GridLayout-footer-box-center">{spot.cat1}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="boxtwo">
                {boxTwoData.map((spot, index) => (
                    <div key={index} className={`box box${index + 1}`}>
                        <img src={spot.firstimage || "https://via.placeholder.com/500"} alt={spot.title} />
                        <h3 className="GridLayout-boxone-title">{spot.title}</h3>
                        <p className="GridLayout-boxone-descripts">{spot.addr1}</p>
                        <div className="GridLayout-footer-box">
                            <div className="GridLayout-footer-box-left">{spot.areacode}</div>
                            <div className="GridLayout-footer-box-center">{spot.cat1}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridLayout;
