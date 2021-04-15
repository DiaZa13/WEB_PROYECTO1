import React from 'react';

function CarouselAsset(props) {
  const asset = props;
  return (
    <div className="carousel-asset-container">
      <div className="carousel-asset">
        <img src={`${asset.img}`} alt="CAROUSEL" className="asset" />

      </div>
    </div>

  );
}

export default CarouselAsset;
