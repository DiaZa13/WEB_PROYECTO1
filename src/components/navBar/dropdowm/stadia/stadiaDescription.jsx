import React from 'react';
import { stadia, stadiaAccessories } from '../../../../utils/navBar';

function StadiaDescription() {
  const stadias = stadia();
  const accessories = stadiaAccessories();

  return (
    <div className="left-container">
      <div className="heading">
        <h2>
          Stadia
        </h2>
        <button className="btn btn-outline-primary" type="button">
          Explore
        </button>
        <div className="bottom-border" />
      </div>
      <div className="row row-cols-3">
        <div className="col">
          <h3>{stadias[0]}</h3>
          <ul>
            {
              stadias.map((item) => {
                const index = stadias.indexOf(item);
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

export default StadiaDescription;
