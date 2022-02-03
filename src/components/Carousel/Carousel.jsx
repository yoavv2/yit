import React, { useState } from 'react';
import './Carousel.css';

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(2);
  const [fakeImages, setFakeImages] = useState([
    {
      url: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/F26F/production/_105636026_gettyimages-1005384726.jpg',
      label: 'Bee',
    },
    {
      url: 'https://media.istockphoto.com/photos/beautiful-sky-with-white-cloud-picture-id1092506504?k=6&m=1092506504&s=612x612&w=0&h=bsGWBc6b2160tBEUQuLUbyjSknPUzQTqWB5uEjjrNmI=',
      label: 'Sky',
    },
    {
      url: 'https://www.impel.eu/wp-content/uploads/2019/08/mediterranean-sea.jpg',
      label: 'Sea',
    },
  ]);

  const nextSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === fakeImages.length - 1 ? 0 : currentImageIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? fakeImages.length - 1 : currentImageIndex - 1
    );
  };

  console.log(currentImageIndex);
  return (
    <section className='carousel'>
      <div>
        <button
          className='right slide-arrow'
          onClick={nextSlide}
          style={{ color: '#fefefe' }}
        >
          <i className='fas fa-chevron-right'></i>
        </button>
        <button
          className='left slide-arrow'
          onClick={prevSlide}
          style={{ color: '#fefefe' }}
        >
          <i className='fas fa-chevron-left'></i>
        </button>
      </div>
      {fakeImages.map((image, i) => (
        <div
          className={i === currentImageIndex ? 'slide active' : 'slide'}
          key={i}
        >
          <img
            src={image.url}
            alt={image.label}
            className='image'
            draggable='false'
          />
        </div>
      ))}
      {fakeImages.length > 1 && (
        <div className='dots'>
          {fakeImages.map((_, index) => (
            <div
              key={index}
              className={index === currentImageIndex ? 'dot active' : 'dot'}
              onClick={() => setCurrentImageIndex(index)}
            >
              <i className='fas fa-circle'></i>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Carousel;
