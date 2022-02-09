import React from 'react';
import './Card.css';
import Carousel from '../Carousel/Carousel';
function Card({ images, subtitle, title, author, category, color }) {
  return (
    <>
      <div className='card'>
        <header className='card_image'>
          <Carousel images={images} />
        </header>
        <main className='card_main'>
          <div
            className='card_category'
            style={{ backgroundColor: `${color}` }}
          >
            {category}
          </div>
          <h2 className='card_title'>{title.substring(0, 100)}</h2>
          <h4 className='card_subtitle'> {subtitle.substring(0, 200)}</h4>

          <div className='card_author'>{author}</div>
        </main>
      </div>
    </>
  );
}

export default Card;
