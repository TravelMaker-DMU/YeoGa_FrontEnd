import React, { useState, useEffect } from 'react';
import '../styles/TripCourse.css';
import axios from 'axios';


const hotelimages = [
    {
      hotelimage:  'https://cdn.pixabay.com/photo/2022/09/16/17/07/city-7459162_960_720.jpg',
      hoteltitle:  '강원도 속초 여행코스 추천',
      courselist: '1. 설악 케이블카',
      courselist2: '2. 설악산',
      
    },

    {
      hotelimage:  'https://cdn.pixabay.com/photo/2021/08/09/11/38/island-6533073_1280.jpg',  
      hoteltitle:  '전라남도 전주 여행코스 추천',
      courselist: '1. 한옥마을',
      courselist2: '2. 전주비빔밥 거리',
      backgroundColor: '#FFCCCB',
    },

    {
      hotelimage:  'https://cdn.pixabay.com/photo/2023/04/20/11/55/village-7939562_960_720.jpg',
      hoteltitle: '제주도 여행코스 추천',
      courselist: '1. 한라산',
      courselist2: '2. 성산일출봉',
      backgroundColor: '#D3FFD3', // 배경색 추가
    }

];


const TripCourse = () => {
    

    {/* 수정중 */}
    const [tripnews, setTripnews] = useState([]);
    const [error, setError] = useState(null);
    const [cardData, setCardData] = useState([]);  // cardData를 상태로 선언
    const [newindex, setNewindex] = useState(0);

    useEffect(() => {
        const fetchTouristSpotsAndLodgings = async () => {
            try {
                const serviceKey = process.env.REACT_APP_API_KEY_openapi;
    
                // 두 API 요청을 병렬로 실행
                const [festivalResponse, lodgingResponse] = await Promise.all([
                    axios.get("http://apis.data.go.kr/B551011/KorService1/searchFestival1", {
                        params: {
                            serviceKey: serviceKey,
                            numOfRows: 6,
                            MobileOS: 'ETC',
                            MobileApp: 'AppTest',
                            _type: 'json',
                            arrange: 'R',
                            listYN: 'Y',
                            eventStartDate: '20241001'
                        }
                    }),
                    
                    axios.get("http://apis.data.go.kr/B551011/KorService1/searchStay1", {
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
                    })
                ]);
    
                // API 응답 처리
                if (festivalResponse.data.response.body.items) {
                    setTripnews(festivalResponse.data.response.body.items.item);
                    
                } else {
                    setError("축제 데이터를 불러오지 못했습니다.");
                }
    
                if (lodgingResponse.data.response.body.items) {
                    const lodgings = lodgingResponse.data.response.body.items.item;
                    // 필터링 조건을 약간 완화하거나 필요한 조건에 맞게 조정
                    const filteredLodgings = lodgings.filter(lodging => 
                        lodging.contenttypeid === '32' &&
                        lodging.cat1 === 'B02' &&
                        lodging.cat2 === 'B0201'
                        // 특정 조건 완화 또는 제거
                    );
                
                const formattedData = filteredLodgings.map(lodging => ({
                    image: lodging.firstimage || 'https://via.placeholder.com/150',
                    title: lodging.title,
                    description: lodging.addr1 || '주소 정보 없음',
                    tel: lodging.tel || '전화번호 정보 없음',  // 전화번호 추가
                    rating: '평점 없음',
                      
                    category: '관광호텔'
                }));
                const shuffledData = formattedData.sort(() => Math.random() - 0.5);
                setCardData(shuffledData);
            } else {
                setError("숙박 데이터를 불러오지 못했습니다.");
            }


            } catch (err) {
                setError("API 요청 중 오류가 발생했습니다.");
                console.error(err);
            }
        };
    
        fetchTouristSpotsAndLodgings();
    }, []);

      // 클릭 시 선택된 인덱스 업데이트
      const handleItemClick = (index) => {
        setNewindex(index);
    };


    const [currentIndex, setCurrentIndex] = useState(0);
    const [tripcurrentIndex, setTripcurrentIndex] = useState(0);
    const currentBackgroundColor = hotelimages[tripcurrentIndex].backgroundColor;

    
    const prevSlide = () => {
        const newIndex = tripcurrentIndex === 0 ? hotelimages.length - 1 : tripcurrentIndex - 1;
        setTripcurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = tripcurrentIndex === hotelimages.length - 1 ? 0 : tripcurrentIndex + 1;
        setTripcurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [tripcurrentIndex]);
   


    const prevCard = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    
    const nextCard = () => {
        if (currentIndex < cardData.length - 4) { // 화면에 3개 카드가 보여지도록 설정
            setCurrentIndex(currentIndex + 1);
        }
    };
    

    

    const Card = ({ image, title, description, rating, tel }) => {
        const [isLiked, setIsLiked] = useState(false);
        const renderStars = (rating) => {
            const fullStars = Math.floor(rating); // 가득 찬 별의 개수
            const stars = [];
            
    
            // 가득 찬 별 추가
            for (let i = 0; i < fullStars; i++) {
                stars.push(<span key={i} className="star full">★</span>);
            }
    
            // 빈 별 추가
            for (let i = fullStars; i < 5; i++) {
                stars.push(<span key={i} className="star empty">☆</span>);
            }
    
            return stars;
        };

        const toggleHeart = () => {
            setIsLiked(!isLiked);
        };




        return (
            <div className="card">
            <div className="image-container">
                <img src={image} alt={title} className="card-image" />
            </div>
            <div className="card-content">
                <div className="card-title">{title}
                    <span className={`heart ${isLiked ? 'liked' : ''}`} onClick={toggleHeart}> ♡</span>
                </div>
                <div className="card-description">주소: {description}</div>
                <div className="card-tel">전화번호: {tel}</div> 
            </div>
        </div>
        
        );
    };


    {/*  뉴스 데이터의 날짜 형식을 2024-11-30 형식으로 변환하는 함수 */}
const newlistDate = (dateString) => {
    if (dateString.length === 8) { // 예를 들어, "20241130"
        return `${dateString.slice(0, 4)}-${dateString.slice(4, 6)}-${dateString.slice(6, 8)}`;
    }   
    return dateString;
};


    return (
        <div className="trip-contents" style={{  transition: 'background-color 0.5s ease' }}>
      <div className="slider">
            <img 
                src={hotelimages[tripcurrentIndex].hotelimage} 
                alt={hotelimages[tripcurrentIndex].hoteltitle || "slide"} 
                className='imageslider' 
            />
            <div className='tripCourse-slider-background'style={{ backgroundColor: currentBackgroundColor,transform: `translateX(-${tripcurrentIndex * 0}%)`, transition: 'transform 0.5s ease-in-out' }}>
                <h2 className='tripCourse-slider-title'>{hotelimages[tripcurrentIndex].hoteltitle || "여행 코스추천"}</h2>
                <div className='tripCourse-slider-contents-list'>
                <p className='sliderread'>{hotelimages[tripcurrentIndex].courselist || ""}</p>
                 <p className='sliderread'>{hotelimages[tripcurrentIndex].courselist2 || ""}</p>
                </div>
            </div>
        </div>
        
        <div className='lodging'>
    <h2 className='Trip-Course-hotel-title'>최근 많이 방문된 숙소예요</h2>
    <div className="slider-controls">
        <button onClick={prevCard} disabled={currentIndex === 0} className="slider-button">◀</button>
        <div className='Card-container'>

            <div className="lodgings" style={{ transform: `translateX(-${currentIndex * 320}px)` }}>
                {cardData.length > 0 ? (
                    cardData.map((card, index) => (
                       <Card key={index} image={card.image} title={card.title} description={card.description} tel={card.tel}  />
                    ))
                ) : (
                    <p>숙소 정보를 불러오는 중입니다...</p>
                )}
            </div>
        </div>
        <button onClick={nextCard} disabled={currentIndex === cardData.length - 1 || cardData.length === 0} className="slider-button">▶</button>
    </div>
</div>

            <div className='tripnews'>
                <div className='tripcontainer'>
                <div className='tripimg'>
            {tripnews.length > 0 && (
               <img 
               src={tripnews[newindex]?.firstimage || "https://via.placeholder.com/150"} 
               alt={tripnews[newindex]?.title || "이미지 없음"} 
               className='tripnews-image' 
           />
            )}
        </div>
 
                   
                    <div className='triplist'>
                        <h2 className='trip-title-name'>이번주 여행소식</h2>
                        {error && <p>{error}</p>}   
                        {tripnews.map((trip, index) => (
                            <div 
                            key={index} 
                            className={`trip-item ${index === newindex ? 'selected' : ''}`} 
                            onClick={() => handleItemClick(index)} >

                                <div className='trip-text'>
                                <div className='trip-title'>{trip.title}</div>
                            <div className='trip-description'>
                                시작일 : {newlistDate(trip.eventstartdate)} ~ 종료일: {newlistDate(trip.eventenddate)}
                            </div>
                                </div>
                             
                                
                            </div>
                            
                            
                        ))}
            </div>   
        </div>
        </div>
        </div>
    );
};

export default TripCourse;