import React, { useState } from 'react';
import './Carousel.css';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  console.log(currentImageIndex);
  return (
    <section className='carousel'>
      {images.length > 1 && (
        <div>
          <div className='right slide-arrow' onClick={nextSlide}>
            <ion-icon name='chevron-forward-outline' size='large'></ion-icon>
          </div>
          <div className='left slide-arrow' onClick={prevSlide}>
            <ion-icon name='chevron-back-outline' size='large'></ion-icon>
          </div>
        </div>
      )}
      {images.map((image, i) => (
        <div
          className={i === currentImageIndex ? 'slide active' : 'slide'}
          key={i}
        >
          <img src={image} alt={image} className='image' draggable='false' />
        </div>
      ))}
      {images.length > 1 && (
        <div className='dots'>
          {images.map((_, index) => (
            <div
              key={index}
              className={index === currentImageIndex ? 'dot active' : 'dot'}
              onClick={() => setCurrentImageIndex(index)}
            >
              <ion-icon
                name='ellipse-sharp'
                style={{ fontSize: '10px' }}
              ></ion-icon>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Carousel;
