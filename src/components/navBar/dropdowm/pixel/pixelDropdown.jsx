import React from 'react';
import PixelDescription from './pixelDescription';
import { pixelExtra } from '../../../../utils/navBar';

function PixelDropdown() {
  const extra = pixelExtra();
  return (
    <div className="dropdown-container">
      <div className="dropdown-inner-container">
        <PixelDescription />
        <div className="right-container">
          <ul>
            {
              extra.map((item) => {
                const index = extra.indexOf(item);
                return (
                  <li key={index} className="extras">
                    {item}
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>

  );
}

export default PixelDropdown;
