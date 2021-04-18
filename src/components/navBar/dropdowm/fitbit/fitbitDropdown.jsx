import React from 'react';
import { fitbitExtra } from '../../../../utils/navBar';
import FitbitDescription from './fitbitDescription';

function FitbitDropdown() {
  const extra = fitbitExtra();
  return (
    <div className="dropdown-container">
      <div className="dropdown-inner-container">
        <FitbitDescription />
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

export default FitbitDropdown;
