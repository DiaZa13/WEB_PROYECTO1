import React from 'react';
import { stadiaExtra } from '../../../../utils/navBar';
import StadiaDescription from './stadiaDescription';

function StadiaDropdown() {
  const extra = stadiaExtra();
  return (
    <div className="dropdown-container">
      <div className="dropdown-inner-container">
        <StadiaDescription />
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

export default StadiaDropdown;
