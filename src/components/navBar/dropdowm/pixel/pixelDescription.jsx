import React from 'react';
import { pixelPhones, pixelCategories, pixelAccessories } from '../../../utils/navBar';

function PixelDescription() {
  const phones = pixelPhones();
  const categories = pixelCategories();
  const accessories = pixelAccessories();
  return (
    <div className="left-container">
      <div className="heading">
        <h2>
          Pixel
        </h2>
        <button className="btn btn-outline-primary" type="button">
          Explore
        </button>
        <div className="bottom-border" />
      </div>
      <div className="row row-cols-3">
        <div className="col">
          <h3>{phones[0]}</h3>
          <ul>
            {
              phones.map((item) => {
                const index = phones.indexOf(item);
                if (index > 0) {
                  return (
                    <li key={index}>
                      <div className="subcategory">{item}</div>
                    </li>
                  );
                }
                return true;
              })
            }
          </ul>
        </div>
        <div className="col">
          <h3>{categories[0]}</h3>
          <ul>
            {
              categories.map((item) => {
                const index = categories.indexOf(item);
                if (index > 0) {
                  return (
                    <li key={index}>
                      <div className="subcategory">{item}</div>
                    </li>
                  );
                }
                return true;
              })
            }
          </ul>
        </div>
        <div className="col">
          <h3>{accessories[0]}</h3>
          <ul>
            {
              accessories.map((item) => {
                const index = accessories.indexOf(item);
                if (index > 0) {
                  return (
                    <li key={index}>
                      <div className="subcategory">{item}</div>
                    </li>
                  );
                }
                return true;
              })
            }
          </ul>
        </div>
      </div>
    </div>

  );
}

export default PixelDescription;
