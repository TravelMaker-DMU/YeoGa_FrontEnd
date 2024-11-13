import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import axios from 'axios';
import '../styles/Trip.css';
import tripimg from '../images/tripimg.png';


const Trip = () => {

    const [hotels, setHotels] = useState([]);  // State to store hotel data
    const [error, setError] = useState(null);

  useEffect(() => {
        const fetchHotels = async () => {
            try {
                const serviceKey = process.env.REACT_APP_API_KEY_openapi;
                const response = await axios.get("http://apis.data.go.kr/B551011/KorService1/searchStay1", {
                    params: {
                        serviceKey: serviceKey,
                        numOfRows: 10, 
                        pageNo: 2,
                        MobileOS: 'ETC',
                        MobileApp: 'AppTest',
                        _type: 'json',
                        listYN: 'Y',
                        arrange: 'O',
                    }
                });
                
                if (response.data.response.body.items.item) {
                    setHotels(response.data.response.body.items.item);
                    const shuffledHotels = response.data.response.body.items.item.sort(() => Math.random() - 0.5);
                    setHotels(shuffledHotels);
                    
                } else {
                    setError("데이터를 불러오지 못했습니다.");
                }
            } catch (error) {
                setError("API 요청 중 오류가 발생했습니다.");
                console.error(error);
            }
        };

        fetchHotels();
    }, []);  // Empty dependency array to fetch only once on mount
    
    return (
        <div className="trip-page">
            <Navbar/>
            <div className='trip-image'>
                <img src={tripimg} alt=""  className='trip-img'/>
            </div>
         

            <div className="main-content">
        

                <div className="filters">
                    <div className="filter-category">
                        <h4>숙소 평점</h4>
                        <ul className='ratingcolor'>
                            <li>
                                <input type="checkbox" id="rating5" />
                                <label htmlFor="rating5">★★★★★</label>
                            </li>
                            <li>
                                <input type="checkbox" id="rating4" />
                                <label htmlFor="rating4">★★★★☆</label>
                            </li>
                            <li>
                                <input type="checkbox" id="rating3" />
                                <label htmlFor="rating3">★★★☆☆</label>
                            </li>
                            <li>
                                <input type="checkbox" id="rating2" />
                                <label htmlFor="rating2">★★☆☆☆</label>
                            </li>
                            <li>
                                <input type="checkbox" id="rating1" />
                                <label htmlFor="rating1">★☆☆☆☆</label>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-category">
                        <h4>지역</h4>
                        <ul>
                            <li>
                                <input type="checkbox" id="seoul" />
                                <label htmlFor="seoul">서울</label>
                            </li>
                            <li>
                                <input type="checkbox" id="busan" />
                                <label htmlFor="busan">부산</label>
                            </li>
                            <li>
                                <input type="checkbox" id="daegu" />
                                <label htmlFor="daegu">대구</label>
                            </li>
                            <li>
                                <input type="checkbox" id="gwangju" />
                                <label htmlFor="gwangju">광주</label>
                            </li>
                            <li>
                                <input type="checkbox" id="incheon" />
                                <label htmlFor="incheon">인천</label>
                            </li>
                            <li>
                                <input type="checkbox" id="daejeon" />
                                <label htmlFor="daejeon">대전</label>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-category">
                        <h4>숙소 등급</h4>
                        <ul>
                            <li>
                                <input type="checkbox" id="5stars" />
                                <label htmlFor="5stars">5성급</label>
                            </li>
                            <li> 
                                <input type="checkbox" id="4stars" />
                                <label htmlFor="4stars">4성급</label>
                            </li>
                            <li>
                                <input type="checkbox" id="3stars" />
                                <label htmlFor="3stars">3성급</label>
                            </li>
                            <li>
                                <input type="checkbox" id="2stars" />
                                <label htmlFor="2stars">2성급</label>
                            </li>
                            <li>
                                <input type="checkbox" id="1star" />
                                <label htmlFor="1star">1성급</label>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-category">
                        <h4>숙소 편의시설/서비스</h4>
                        <ul>
                            <li>
                                <input type="checkbox" id="pool" />
                                <label htmlFor="pool">수영장</label>
                            </li>
                            <li>
                                <input type="checkbox" id="wifi" />
                                <label htmlFor="wifi">무료와이파이</label>
                            </li>
                            <li>
                                <input type="checkbox" id="breakfast" />
                                <label htmlFor="breakfast">조식서비스</label>
                            </li>
                            <li>
                                <input type="checkbox" id="roomService" />
                                <label htmlFor="roomService">룸서비스</label>
                            </li>
                            <li>
                                <input type="checkbox" id="parking" />
                                <label htmlFor="parking">주차시설</label>
                            </li>
                        </ul>
                    </div>
                </div>
         
                <div className="hotels">
                <h2>BEST HOTEL</h2>         
                    <div className="hotel-grid">
                        {hotels.length > 0 ? (
                            hotels.map((hotel, index) => (
                                <div key={index} className="hotel-card">
                                    <img 
                                        src={hotel.firstimage || "https://via.placeholder.com/150"} 
                                        alt={hotel.title || "Hotel"} 
                                        className="hotel-image" 
                                    />
                                    <div className="hotel-info">
                                        <h4>{index + 1}. {hotel.title}</h4>
                                        <p>주소 : {hotel.addr1 || "주소 정보 없음"}</p>
                                        <p>전화번호 : {hotel.tel || "전화번호 정보 없음"}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>숙소 정보를 불러오는 중입니다...</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Trip;
