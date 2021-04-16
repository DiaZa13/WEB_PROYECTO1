import React from 'react';
import CarouselAsset from './carouselAsset';
import img from '../../assets/carousel2.png';

function CarouselItemA() {
  return (
    <div className="carousel-container">
      <div className="carousel-description-container">
        <div className="carousel-description">
          <div className="description1">
            Pixel 4a with 5G
          </div>
          <div className="description2">
            <span className="text-blue"> High-speed help, </span>
            <br />
            for less.
          </div>
          <div className="description3">
            Plus, get money back when you trade in your old phone
          </div>
          <div className="button-container">
            <button className="btn btn-outline-primary" type="button">Learn more</button>
          </div>
        </div>
      </div>
      <CarouselAsset
        img={img}
      />
    </div>

  );
}

export default CarouselItemA;
