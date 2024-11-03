import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SearchBar from '../components/SearchBar';
import '../styles/Trip.css';

const Trip = () => {
    return (
        <div className="trip-page">
            <Navbar/>
            <div className='trip-image'>
                {/* Placeholder   for a trip image or banner */}
            </div>
            <SearchBar />

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
                        {/* Placeholder for hotel images */}
                        <div className="hotel-image-placeholder"></div>
                        <div className="hotel-image-placeholder"></div>
                        <div className="hotel-image-placeholder"></div>
                        <div className="hotel-image-placeholder"></div>
                    </div>
                    <div className="hotel-list">
                        {/* Sample hotel card */}
                        <div className="hotel-card">
                            <img src="https://via.placeholder.com/150" alt="Hotel" className="hotel-image" />
                            <div className="hotel-info">
                                <h4>1. BEST HOTEL</h4>
                                <p>강원도 속초시 조양동</p>
                                <p>일출과 바다 전망이 아름다운 호텔.</p>
                            </div>
                        </div>

                        {/* Add more hotel cards as needed */}
                        <div className="hotel-card">
                            <img src="https://via.placeholder.com/150" alt="Hotel" className="hotel-image" />
                            <div className="hotel-info">
                                <h4>2. BEST HOTEL</h4>
                                <p>강원도 속초시 조양동</p>
                                <p>일출과 바다 전망이 아름다운 호텔.</p>
                            </div>
                        </div>

                        <div className="hotel-card">
                            <img src="https://via.placeholder.com/150" alt="Hotel" className="hotel-image" />
                            <div className="hotel-info">
                                <h4>3. BEST HOTEL</h4>
                                <p>강원도 속초시 조양동</p>
                                <p>일출과 바다 전망이 아름다운 호텔.</p>
                            </div>
                        </div>
                        
                        <div className="hotel-card">
                            <img src="https://via.placeholder.com/150" alt="Hotel" className="hotel-image" />
                            <div className="hotel-info">
                                <h4>3. BEST HOTEL</h4>
                                <p>강원도 속초시 조양동</p>
                                <p>일출과 바다 전망이 아름다운 호텔.</p>
                            </div>
                        </div>
                        {/* Duplicate as needed for more hotels */}
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
};

export default Trip;
