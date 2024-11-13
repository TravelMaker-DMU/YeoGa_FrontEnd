import React, { useState, useEffect } from 'react';
import '../styles/ImageSlider.css';
import seoulmainimg from "../images/seoul-main-img.jpg";
import slide1 from '../images/slideimg.png';

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageSlides = [
    {
      image: slide1,
      background: slide1,
      title: "자연과 전통이 어우러진 여행지, 전라남도",
      description: "푸른 바다와 드넓은 산이 빚어내는 아름다움, 전라남도에서 잊지 못할 여정을 시작하세요.",
    },
    {
      image: seoulmainimg,
      background: seoulmainimg,
      title: "도심 속의 빛나는 랜드마크, 롯데월드타워",
      description: "서울의 밤하늘을 수놓는 롯데월드타워에서 도시의 화려한 야경을 감상하며 특별한 순간을 경험하세요.",
    },
    { 
      image: "https://media.istockphoto.com/id/1083573614/ko/%EC%82%AC%EC%A7%84/%ED%95%B4%EC%95%88-%EC%A0%88%EB%B2%BD-vd702%EC%9D%98-%EB%B0%98%EC%98%81.webp?s=2048x2048&w=is&k=20&c=0alpDoxr2g4W3INmO2ChZaULCnneSfCd8eiXH8dFAI8=",
      background: "https://media.istockphoto.com/id/1083573614/ko/%EC%82%AC%EC%A7%84/%ED%95%B4%EC%95%88-%EC%A0%88%EB%B2%BD-vd702%EC%9D%98-%EB%B0%98%EC%98%81.webp?s=2048x2048&w=is&k=20&c=0alpDoxr2g4W3INmO2ChZaULCnneSfCd8eiXH8dFAI8=",
      title: "자연이 빚어낸 장엄한 풍경, 해안절벽",
      description: "끝없이 펼쳐지는 바다와 어우러지는 해안절벽에서 마법 같은 일몰을 감상하며 잊지 못할 순간을 만들어보세요.",
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
     style={{ backgroundImage: `url(${imageSlides[currentImageIndex].background})` }}
    >
      <div className="overlay">
        <h1>{imageSlides[currentImageIndex].title}</h1>
        <p>{imageSlides[currentImageIndex].description}</p>
      </div>

      <div className="slider-images">
        <div
          className="slider-container"
          style={{ transform: `translateX(-${currentImageIndex * (270)}px)` }}
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
