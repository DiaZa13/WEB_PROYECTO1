import React from 'react';
import CarouselAsset from './carouselAsset';
import img from '../../assets/carousel1.jpg';

function CarouselItemB() {
  return (
    <div className="carousel-container">
      <div className="carousel-description-container">
        <div className="carousel-description">
          <div className="description1">
            Save energy with the Nest Thermostat
          </div>
          <div className="description2">
            <span className="text-green"> Go eco </span>
            this Earth Day.
          </div>
          <div className="description3 text-center" />
          The Nest Thermostat helps you reduce your carbon footprint.
          <br />
          Now on sale for $99 through April 22
        </div>
      </div>
      <CarouselAsset
        img={img}
      />
    </div>

  );
}

export default CarouselItemB;
