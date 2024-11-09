import React from "react";
import '../TripMap/TripMap.css';
import Navbar from "../../components/Navbar";
import image31 from '../../images/image 31.png';
// import "../styles/TripMap.css"; 

const TripMap = () => {
    return (
        <div className="trip-map-container">
            <Navbar/>

            <div className="trip-map-container-box-img">
                <img src={image31} alt="배경 이미지" className="trip-map-container-img" />
            </div>

            <div className="trip-map-section">
                
                <div className="map-section">
                    <div className="map-image"></div>
                </div>

                <div className="location-info">
                    <h2>관광명소</h2>
                    <div className="city-names">
                        <div className="city">
                            <p>대한민국 경기도 수원시</p>
                            <h3>수원시</h3>
                        </div>
                        <div className="city">
                            <p>대한민국 경기도 수원시</p>
                            <h3>수원시</h3>
                        </div>
                        <div className="city">
                            <p>대한민국 경기도 수원시</p>
                            <h3>수원시</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="recommendations">
                <h2>추천 여행코스</h2>
                <div className="trip-cards">
                    {[1, 2, 3].map((num) => (
                        <div className="trip-card" key={num}>
                            <div className="trip-card-image"></div>
                            <div className="trip-card-content">
                                <h3>여행코스</h3>
                                <p>아름다운 조경과 함께</p>
                            </div>
                            <div className="trip-card-number">0{num}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TripMap;
