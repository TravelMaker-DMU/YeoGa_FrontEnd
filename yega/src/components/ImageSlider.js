import React from 'react';
import '../styles/ImageSlider.css';

function ImageSlider() {
  return (
    <div className="image-slider">
      <div className="overlay">
        <h1>travel site</h1>
        <p>And various tourist attractions</p>
        <button>Button</button>
      </div>
      <div className="slider-images">
        <div className='images1'>
        <img src="https://cdn.pixabay.com/photo/2019/08/14/10/34/beach-4405357_1280.jpg" alt="Image 1" />
        </div>
        <div className='images2'>
        <img src="https://cdn.pixabay.com/photo/2019/08/14/10/34/beach-4405357_1280.jpg" alt="Image 2" />
        </div>
        <div className='images3'>
        <img src="https://cdn.pixabay.com/photo/2019/08/14/10/34/beach-4405357_1280.jpg" alt="Image 3" />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;