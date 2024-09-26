import React, { useState, useEffect } from 'react';
import '../styles/TripCourse.css';

const images = [
    'https://cdn.pixabay.com/photo/2022/09/16/17/07/city-7459162_960_720.jpg',
    'https://cdn.pixabay.com/photo/2021/08/09/11/38/island-6533073_1280.jpg',
    'https://cdn.pixabay.com/photo/2023/04/20/11/55/village-7939562_960_720.jpg',
];

const cardData = [
    {
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDJfMjU3%2FMDAxNjU2NzcxMzIyMDM0.EUzWzqrzKga2_kXU33jdke7qHox4iCc60fZz5VADjvMg.81V6O9Ks-ZjFL7rPOk3Ip7-N9WsGqzIjqTfbByX_5NIg.JPEG.ydy8104%2FScreenshot_20220702-231424_Google1.jpg&type=sc960_832', 
        title: 'FOOD',
        description: 'a nationwide tour of good restaurants'
    },
    {
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODExMDlfNDUg%2FMDAxNTQxNzU2ODM2MjUw.iVbl03XggTtjzm4lyfa4JVhUzWf9yqmiK0CIu8bFQDQg.ChxpiLBmIVhRvuuSZHuLBaq9_D-PfLSNHFTwV1c-TDYg.PNG.kimggones2%2F%25B1%25B9%25B3%25BB_%25C8%25A3%25C5%25DA_%25BC%25F8%25C0%25A7007.png&type=sc960_832',
        title: 'FOOD',
        description: 'a nationwide tour of good restaurants'
    },
    {
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjNfOTEg%2FMDAxNjE2NDg2NDgxOTc0.WUR1a42Mg1KDNjjYbUGY3W5ohh5TjEou7neudPHB-gAg.9gzysiUuQCNRuOt3xkY3AuItrFcSF4vdbLG0zLYTTcAg.JPEG.sue11ksy%2FKakaoTalk_20210323_104415872_06.jpg&type=sc960_832',
        title: 'FOOD',
        description: 'a nationwide tour of good restaurants'
    },
    
    {
        image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxOTA4MTlfMTMz%2FMDAxNTY2MTk0ODY2NTEw.Znk-_Ykdq6e_LJ73nbkC30s5FMmV_4gpMLFGAQ63Zf8g.Wh4ykH7OP0lNH8GVNibM2Yl83-9MYaKPAG176TYY3Cwg.JPEG%2FIiUNoBCh9LHxAy0hJGQOtJfZRPL0.jpg&type=sc960_832',
        title: 'FOOD',
        description: 'a nationwide tour of good restaurants'
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

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }; 

    const nextSlide = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval); 
    }, [currentIndex]);

    const Card = ({ image, title, description }) => {
        return (
            <div className="card">
                <div className="image-container">
                    <img src={image} alt={title} className="card-image" />
                </div>
                <div className="card-content">
                    <div className="card-title">{title}</div>
                    <div className="card-description">{description}</div>
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
        <div className='tripcontents'>
            <div className="slider">
                <img src={images[currentIndex]} alt="slide" className='imageslider' />
                <div className='sliderback'>
                    <h2 className='sliderfont'>여행 코스추천</h2>
                    <p className='sliderread'>a nationwide tour of<br/>good restaurants</p>
                </div>
            </div>

            <div className='lodging'>
                <h2>최근 많이 방문된 숙소예요</h2>
                <div className="lodgings">
                    {cardData.map((card, index) => (
                        <Card key={index} image={card.image} title={card.title} description={card.description} />
                    ))}
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
