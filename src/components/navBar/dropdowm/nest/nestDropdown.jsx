import React from 'react';
import { nestExtras } from '../../../../utils/navBar';
import NestDescription from './nestDescription';

function NestDropdown() {
  const extra = nestExtras();
  return (
    <div className="dropdown-container">
      <div className="dropdown-inner-container">
        <NestDescription />
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

export default NestDropdown;
