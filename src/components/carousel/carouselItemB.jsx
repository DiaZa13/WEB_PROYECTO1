import React from 'react';
import CarouselAsset from './carouselAsset';
import img from '../../assets/producto2.png';
import netflix from '../../assets/netflix.png';

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
          <div className="description-netflix">
            <div style={{ width: '78px' }} className="p-auto my-auto mx-3">
              <div className="netflix m-auto px-2">
                <picture>
                  <img src={netflix} alt="Netflix" className="product-img" />
                </picture>
              </div>
            </div>
            <div className="border-left netflix-text m-0 pl-3">
              <div>
                Buy Chromecast with Google TV and
                <br />
                6 months of Netflix for just $89.999
              </div>
            </div>
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

export default functionName;
