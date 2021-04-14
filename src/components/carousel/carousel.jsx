import React from 'react';
import CarouselItemB from './carouselItemB';
import CarouselItemA from './carouselItemA';
import CarouselItemC from './carouselItemC';

function functionName() {
  return (
      <div id="carouselExampleIndicators" className="carousel slide h-100" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner h-100">
          <div className="carousel-item active">
            <CarouselItemC />
          </div>
          <div className="carousel-item h-100">
            <CarouselItemB />
          </div>
          <div className="carousel-item h-100">
            <CarouselItemA />
          </div>
        </div>
      </div>
  );
}

export default functionName;
