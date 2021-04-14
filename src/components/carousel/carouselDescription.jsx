import React from 'react';

function CarouselDescription(props) {
  const description = props;
  return (
    <div className="carousel-description-container">
      <div className="carousel-description">
        <div className="description1">
          {description.des1}
        </div>
        <div className="description2">
          <span style={{ color: `${description.color}` }}>{description.des2}</span>
          {description.des2_1}
        </div>
        <div className="description3">
          {description.des3}
          <br />
          {description.des3_1}
        </div>
      </div>
    </div>
  );
}

export default CarouselDescription;
