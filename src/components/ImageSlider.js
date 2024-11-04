import React, { useState, useEffect } from 'react';
import '../styles/ImageSlider.css';
import seoulmainimg from "../images/seoul-main-img.jpg";
import seoul from '../images/반포대교.jpg';

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageSlides = [
    {
      image: seoul,
      background: seoul,
      title: "서울특별시",
      description: "서울의 매력을 느낄 수 있는 반포대교",
    },
    {
      image: seoulmainimg,
      background: seoulmainimg,
      title: "롯데월드타워",
      description: "서울의 야경을 볼 수 있는 롯데월드타워",
    },
    {
      image: "https://media.istockphoto.com/id/1083573614/ko/%EC%82%AC%EC%A7%84/%ED%95%B4%EC%95%88-%EC%A0%88%EB%B2%BD-vd702%EC%9D%98-%EB%B0%98%EC%98%81.webp?s=2048x2048&w=is&k=20&c=0alpDoxr2g4W3INmO2ChZaULCnneSfCd8eiXH8dFAI8=",
      background: "https://media.istockphoto.com/id/1083573614/ko/%EC%82%AC%EC%A7%84/%ED%95%B4%EC%95%88-%EC%A0%88%EB%B2%BD-vd702%EC%9D%98-%EB%B0%98%EC%98%81.webp?s=2048x2048&w=is&k=20&c=0alpDoxr2g4W3INmO2ChZaULCnneSfCd8eiXH8dFAI8=",
      title: "해안절벽",
      description: "환상적인 일몰을 볼 수 있는 장소",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === imageSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [imageSlides.length]);

  return (
    <div
      className="image-slider"
      style={{
        backgroundImage: `url(${imageSlides[currentImageIndex].background})`,
      }}
    >
      <div className="overlay">
        <h1>{imageSlides[currentImageIndex].title}</h1>
        <p>{imageSlides[currentImageIndex].description}</p>
        <button>Button</button>
      </div>
      <div className="slider-images">
        <div
          className="slider-container"
          style={{ transform: `translateX(-${currentImageIndex * 20}%)` }}
        >
          {imageSlides.map((slide, index) => (
            <div
              className={`slide ${currentImageIndex === index ? 'active' : ''}`}
              key={index}
            >
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
