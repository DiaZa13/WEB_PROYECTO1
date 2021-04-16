import React from 'react';
import video from '../../assets/carousel.mp4';

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
          <div className="description3">
            The Nest Thermostat helps you reduce your carbon footprint.
            <br />
            Now on sale for $99 through April 22
          </div>
          <div className="button-container">
            <button className="btn btn-outline-primary" type="button">Learn more</button>
          </div>
        </div>
      </div>
      <div className="carousel-asset-container">
        <div className="carousel-asset">
          <video src={video} className="product-img" />
        </div>
      </div>
    </div>
  );
}
export default CarouselItemB;
