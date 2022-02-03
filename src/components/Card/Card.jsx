import React from 'react';
import './Card.css';
import Carousel from '../Carousel/Carousel';
function Card() {
  let color = 'red';
  return (
    <section className='card_wrap'>
      <div className='card'>
        <div className='card_image'>
          <Carousel />
        </div>
        <main className='card_main'>
          <div
            className={`card_main__category`}
            style={{ backgroundColor: `${color}` }}
          >
            חופש
          </div>
          <h2>כותרת</h2>
          <h3>כותרת משנה</h3>

          <div>author</div>
        </main>
      </div>
    </section>
  );
}

export default Card;
