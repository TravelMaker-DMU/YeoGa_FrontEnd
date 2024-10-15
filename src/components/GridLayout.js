import React, { useEffect, useState } from "react";
import '../styles/GridLayout.css';
import axios from "axios";

function GridLayout() {

    const [tourData, setTourData] = useState([]);
    const [randomTourData, setRandomTourData] = useState([]);
    const defaultTourData = [
        {
            galTitle: "수원",
            galWebImageUrl: "https://media.istockphoto.com/id/917502636/ko/%EC%82%AC%EC%A7%84/%ED%99%94%EC%84%B1-%EC%9A%94%EC%83%88%EC%9D%98-%EC%84%9D%EC%96%91%EC%9D%80-%EC%88%98%EC%9B%90%EC%8B%9C-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98-%EC%A4%91%EC%8B%AC%EC%9D%84-%EB%91%98%EB%9F%AC%EC%8B%BC-%EC%A1%B0%EC%84%A0-%EC%99%95%EC%A1%B0.jpg"
        },
        {
            galTitle: "서울",
            galWebImageUrl: "https://media.istockphoto.com/id/1470153983/ko/%EC%82%AC%EC%A7%84/%EB%A1%AF%EB%8D%B0%EC%9B%94%EB%93%9C%ED%83%80%EC%9B%8C-%EC%84%9C%EC%9A%B8-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD.jpg?s=2048x2048&w=is&k=20&c=W7PkziEX0IEOdwD9sFz4YXNeq3cmT5gU7zp8kk0sFkc="
        },
        {
            galTitle: "강원도",
            galWebImageUrl: "https://cdn.pixabay.com/photo/2020/03/05/08/04/mt-seoraksan-4903751_1280.jpg"
        },
        {
            galTitle: "부산",
            galWebImageUrl: "https://media.istockphoto.com/id/1168177363/ko/%EC%82%AC%EC%A7%84/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EB%B6%80%EC%82%B0%EC%97%90-%EC%9E%88%EB%8A%94-%EC%84%B1%EC%A0%84.jpg?s=2048x2048&w=is&k=20&c=Mea8pH84Uakmdgm3uZLvRN-_Q7LNJxF2V8GA4LXD7Lg="
        }
    ];

    useEffect(() => {
        const fetchTourData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/tour', {
                    headers: {
                        'Content-Type': 'application/json',
                        withCredentials: true
                    },
                });

                const items = response?.data?.response?.body?.items?.item || [];
                if (items.length > 0) {
                    const randomItems = getRandomItems(items, 4);
                    setRandomTourData(randomItems);
                } else {
                    console.log("No items found, using default data");
                    setRandomTourData(defaultTourData); // 기본 데이터를 사용
                }

            } catch (error) {
                console.error('Error fetching the data, using default data', error);
                setRandomTourData(defaultTourData); // 기본 데이터를 사용
            }
        };
        fetchTourData();
    }, []);

    const getRandomItems = (arr, n) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    }

    return(
        <div className="grid-container">
        <div className="trip">
        <h2>국내 추천 여행지</h2>
        </div>
        <div className="boxone">
            {randomTourData.length > 0 ? (
                randomTourData.map((item, index) => (
                    <div className={`box box${index + 1}`} key={item.galTitle}>
                        <h3>{item.galTitle}</h3>
                        <img src={item.galWebImageUrl} alt={item.galTitle} />
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}

        </div>
    </div>
    )
};




export default GridLayout;