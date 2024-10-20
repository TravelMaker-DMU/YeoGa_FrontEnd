import React, { useState, useEffect } from 'react';
import '../styles/TripCourse.css';


// 여행소식 api 키 필요
// 숙소카드쪽 api 키 필요 


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

const cardData = [
    {
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDJfMjU3%2FMDAxNjU2NzcxMzIyMDM0.EUzWzqrzKga2_kXU33jdke7qHox4iCc60fZz5VADjvMg.81V6O9Ks-ZjFL7rPOk3Ip7-N9WsGqzIjqTfbByX_5NIg.JPEG.ydy8104%2FScreenshot_20220702-231424_Google1.jpg&type=sc960_832', 
        title: '신라스테이 여수',
        description: '전남 여수시 수정3길 8',
        rating: 4,
    },
    {
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODExMDlfNDUg%2FMDAxNTQxNzU2ODM2MjUw.iVbl03XggTtjzm4lyfa4JVhUzWf9yqmiK0CIu8bFQDQg.ChxpiLBmIVhRvuuSZHuLBaq9_D-PfLSNHFTwV1c-TDYg.PNG.kimggones2%2F%25B1%25B9%25B3%25BB_%25C8%25A3%25C5%25DA_%25BC%25F8%25C0%25A7007.png&type=sc960_832',
        title: 'FOOD',
        description: 'a nationwide tour of good restaurants',
        rating: '4점',
    },
    {
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjNfOTEg%2FMDAxNjE2NDg2NDgxOTc0.WUR1a42Mg1KDNjjYbUGY3W5ohh5TjEou7neudPHB-gAg.9gzysiUuQCNRuOt3xkY3AuItrFcSF4vdbLG0zLYTTcAg.JPEG.sue11ksy%2FKakaoTalk_20210323_104415872_06.jpg&type=sc960_832',
        title: 'FOOD',
        description: 'a nationwide tour of good restaurants',
        rating: '4점',
    },
    {
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjNfOTEg%2FMDAxNjE2NDg2NDgxOTc0.WUR1a42Mg1KDNjjYbUGY3W5ohh5TjEou7neudPHB-gAg.9gzysiUuQCNRuOt3xkY3AuItrFcSF4vdbLG0zLYTTcAg.JPEG.sue11ksy%2FKakaoTalk_20210323_104415872_06.jpg&type=sc960_832',
        title: 'FOOD',
        description: 'a nationwide tour of good restaurants',
        rating: '4점',
    },
    
    {
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjNfOTEg%2FMDAxNjE2NDg2NDgxOTc0.WUR1a42Mg1KDNjjYbUGY3W5ohh5TjEou7neudPHB-gAg.9gzysiUuQCNRuOt3xkY3AuItrFcSF4vdbLG0zLYTTcAg.JPEG.sue11ksy%2FKakaoTalk_20210323_104415872_06.jpg&type=sc960_832',
        title: 'FOOD',
        description: 'a nationwide tour of good restaurants',
        rating: '4점',
    },
    {
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxOTA4MTlfMTMz%2FMDAxNTY2MTk0ODY2NTEw.Znk-_Ykdq6e_LJ73nbkC30s5FMmV_4gpMLFGAQ63Zf8g.Wh4ykH7OP0lNH8GVNibM2Yl83-9MYaKPAG176TYY3Cwg.JPEG%2FIiUNoBCh9LHxAy0hJGQOtJfZRPL0.jpg&type=sc960_832',
        title: 'FOOD',
        description: 'a nationwide tour of good restaurants',
        rating: '4점',
    }
];

const tripnewsData = [
    {
        title: '서울특별시 -',
        description: '2024년 서커스 마술 여행'
    },
    {
        title: '서울특별시 -',
        description: '2024년 서커스 마술 여행'
    },
    {
        title: '서울특별시 -',
        description: '2024년 서커스 마술 여행'
    }
];

const TripCourse = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [tripcurrentIndex, setTripcurrentIndex] = useState(0);
    const currentBackgroundColor = hotelimages[tripcurrentIndex].backgroundColor;


    //수정 필요!
    
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
    

    const Card = ({ image, title, description, rating }) => {
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
                    <span 
                        className={`heart ${isLiked ? 'liked' : ''}`} 
                        onClick={toggleHeart}> ♡
                    </span>
                    </div>
                
                    <div className="card-description">주소 : {description}</div>
                    <div className="card-rating">평점 : {renderStars(rating)}</div>
                   
                </div>
            </div>
        );
    };

    const Tripnews = ({ title, description }) => {
        return (
            <div className='trip-item'>
                <div className='trip-title'>{title}</div>
                <div className='trip-description'>{description}</div>
            </div>
        );
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
                        {cardData.map((card, index) => (
                            <Card key={index} image={card.image} title={card.title} description={card.description} rating={card.rating} />
                        ))}
                        </div>
                    </div>
                    <button onClick={nextCard} disabled={currentIndex === cardData.length - 1} className="slider-button">▶</button>
                </div>
            </div>

            <div className='tripnews'>
                <div className='tripcontainer'>
                    <div className='tripimg'>
                        {/* Placeholder for image or other content */}
                    </div>
                   
                    <div className='triplist'>
                        <h2 className='trip-title-name'>이번주 여행소식</h2>
                        {tripnewsData.map((trip, index) => (
                            <Tripnews key={index} title={trip.title} description={trip.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripCourse;
