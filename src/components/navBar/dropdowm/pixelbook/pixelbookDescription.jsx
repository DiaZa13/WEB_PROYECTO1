import React from 'react';
import { pixelbookLaptops, pixelbookAccessories } from '../../../../utils/navBar';

function PixelbookDescription() {
  const laptops = pixelbookLaptops();
  const accessories = pixelbookAccessories();
  return (
    <div className="left-container">
      <div className="heading">
        <h2>
          Pixelbook
        </h2>
        <button className="btn btn-outline-primary" type="button">
          Explore
        </button>
        <div className="bottom-border" />
      </div>
      <div className="row row-cols-3">
        <div className="col">
          <h3>{laptops[0]}</h3>
          <ul>
            {
              laptops.map((item) => {
                const index = laptops.indexOf(item);
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

export default PixelbookDescription;
