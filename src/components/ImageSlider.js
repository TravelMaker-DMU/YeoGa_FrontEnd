import React, { useState, useEffect } from 'react';
import '../styles/ImageSlider.css';

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const images = [
    "https://cdn.pixabay.com/photo/2019/08/14/10/34/beach-4405357_1280.jpg",
    "https://media.istockphoto.com/id/1083573614/ko/%EC%82%AC%EC%A7%84/%ED%95%B4%EC%95%88-%EC%A0%88%EB%B2%BD-vd702%EC%9D%98-%EB%B0%98%EC%98%81.webp?s=2048x2048&w=is&k=20&c=0alpDoxr2g4W3INmO2ChZaULCnneSfCd8eiXH8dFAI8=",
    "https://cdn.pixabay.com/photo/2019/08/14/10/34/beach-4405357_1280.jpg"
  ];

  // Duplicate the first and last images for smooth looping
  const imagesLoop = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImageIndex === images.length) {
        setTransitionEnabled(false);
        setCurrentImageIndex(1); // Reset to the second image to create a seamless loop
      } else {
        setTransitionEnabled(true);
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentImageIndex, images.length]);

  // Handle the end of the transition to reset the state
  const handleTransitionEnd = () => {
    if (!transitionEnabled) {
      setTransitionEnabled(true);
    }
  };

  return (
    <div
      className="image-slider"
      style={{ backgroundImage: `url(${imagesLoop[currentImageIndex]})` }} // Set the background based on the current index
    >
      <div className="overlay">
        <h1>travel site</h1>
        <p>And various tourist attractions</p>
        <button>Button</button>
      </div>
      <div className="slider-images">
        <div
          className={`slider-container ${transitionEnabled ? 'transition' : ''}`}
          onTransitionEnd={handleTransitionEnd}
          style={{ transform: `translateX(-${currentImageIndex * 270}px)` }} // Adjust sliding effect
        >
          {imagesLoop.map((image, index) => (
            <div className={`images${index + 1}`} key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
