import React from 'react';
import { fitbitTrackers, fitbitSmartwatches } from '../../../../utils/navBar';

function FitbitDescription() {
  const trackers = fitbitTrackers();
  const watches = fitbitSmartwatches();
  return (
    <div className="left-container">
      <div className="heading">
        <h2>
          Fitbit
        </h2>
        <button className="btn btn-outline-primary" type="button">
          Explore
        </button>
        <div className="bottom-border" />
      </div>
      <div className="row row-cols-3">
        <div className="col">
          <h3>{watches[0]}</h3>
          <ul>
            {
              watches.map((item) => {
                const index = watches.indexOf(item);
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
          <h3>{trackers[0]}</h3>
          <ul>
            {
              trackers.map((item) => {
                const index = trackers.indexOf(item);
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

export default FitbitDescription;
