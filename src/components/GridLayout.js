import React from "react";
import '../styles/GridLayout.css';


function GridLayout() {
    return(
        <div className="grid-container">
        <div className="trip">
        <h2>국내 추천 여행지</h2>
        </div>
        <div className="boxone">
        <div className="box box1">
            <h3>수원</h3>
            <img src="https://media.istockphoto.com/id/917502636/ko/%EC%82%AC%EC%A7%84/%ED%99%94%EC%84%B1-%EC%9A%94%EC%83%88%EC%9D%98-%EC%84%9D%EC%96%91%EC%9D%80-%EC%88%98%EC%9B%90%EC%8B%9C-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98-%EC%A4%91%EC%8B%AC%EC%9D%84-%EB%91%98%EB%9F%AC%EC%8B%BC-%EC%A1%B0%EC%84%A0-%EC%99%95%EC%A1%B0.jpg?s=2048x2048&w=is&k=20&c=MdtUl6Wfpmhd8Ji890FypGl7xbYhfpsG1usgLVU8Oa0="/>
        </div>
        <div className="box box2">
            <h3>서울</h3>
            <img src="https://media.istockphoto.com/id/1470153983/ko/%EC%82%AC%EC%A7%84/%EB%A1%AF%EB%8D%B0%EC%9B%94%EB%93%9C%ED%83%80%EC%9B%8C-%EC%84%9C%EC%9A%B8-%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD.jpg?s=2048x2048&w=is&k=20&c=W7PkziEX0IEOdwD9sFz4YXNeq3cmT5gU7zp8kk0sFkc="/>
        </div>
        <div className="box box3">
        <h3>강원도</h3>
        <img src="https://cdn.pixabay.com/photo/2020/03/05/08/04/mt-seoraksan-4903751_1280.jpg"/>
        </div>
        
        <div className="box box4">
        <h3>부산</h3>
        <img src="https://media.istockphoto.com/id/1168177363/ko/%EC%82%AC%EC%A7%84/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD-%EB%B6%80%EC%82%B0%EC%97%90-%EC%9E%88%EB%8A%94-%EC%84%B1%EC%A0%84.jpg?s=2048x2048&w=is&k=20&c=Mea8pH84Uakmdgm3uZLvRN-_Q7LNJxF2V8GA4LXD7Lg="/>
        </div>
        </div>
        <div className="boxtwo">
            <div className="box box5"></div>
            <div className="box box6"></div>
            <div className="box box7"></div>
            <div className="box box8"></div>

        </div>
    </div>
    )
};




export default GridLayout;