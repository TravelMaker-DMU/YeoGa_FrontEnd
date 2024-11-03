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
                const randomPage = Math.floor(Math.random() * 10) + 1; // 1부터 10까지의 랜덤 페이지 번호

                const response = await axios.get("http://apis.data.go.kr/B551011/KorService1/areaBasedList1", {
                    params: {
                        serviceKey: serviceKey,
                        numOfRows: 4,
                        pageNo: randomPage, // 랜덤 페이지 번호 사용
                        MobileOS: 'ETC',
                        MobileApp: 'AppTest',
                        _type: 'json',
                        areaCode: '6',
                        contentTypeId: '12',
                        listYN: 'Y'
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

    return (
        <div className="grid-container">
            <div className="GridLayout-trip">
                <h2 className="GridLayout-trip-title">국내 추천 여행지</h2>
            </div>
            <div className="boxone">
                {touristSpots.map((spot, index) => (
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
                {touristSpots.map((spot, index) => (
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
