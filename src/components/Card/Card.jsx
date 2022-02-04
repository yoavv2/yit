import React from 'react';
import './Card.css';
import Carousel from '../Carousel/Carousel';
function Card({ images, subtitle, title, author, category, color }) {
  return (
    <section className='card_wrap'>
      <div className='card'>
        <div className='card_image'>
          <Carousel images={images} />
        </div>
        <main className='card_main'>
          <div
            className='card_category'
            style={{ backgroundColor: `${color}` }}
          >
            {category.substring(0, 6)}
          </div>
          <h2 className='card_title'>{title.substring(0, 100)}</h2>
          <h4 className='card_subtitle'> {subtitle.substring(0, 200)}</h4>

          <div className='card_author'>{author}</div>
        </main>
      </div>
    </section>
  );
}

export default Card;
