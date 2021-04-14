import React from 'react';
import CarouselAsset from './carouselAsset';
import img from '../../assets/carousel1.jpg';

function functionName() {
  return (
    <div className="carousel-container">
      <div className="carousel-description-container">
        <div className="carousel-description">
          <div className="description1">
            Chromecast with Google TV
          </div>
          <div className="description2 text-red">
            <span className="text-primary"> An app-load of </span>
            entertainment
          </div>
          <div className="description3" />
        </div>
      </div>
      <CarouselAsset
        img={img}
      />
    </div>

  );
}

export default functionName;
