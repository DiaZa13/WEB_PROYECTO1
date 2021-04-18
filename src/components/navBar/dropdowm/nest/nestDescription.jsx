import React from 'react';
import {
  nestConnectivity,
  nestThermostats,
  nestCameras,
  nestSafety,
  nestServices,
  nestSolutions,
  nestAccessories,
  nestStreaming, nestSpeakers, nestDisplays,
} from '../../../../utils/navBar';

function NestDescription() {
  const solutions = nestSolutions();
  const safety = nestSafety();
  const thermostat = nestThermostats();
  const speakers = nestSpeakers();
  const cameras = nestCameras();
  const accessories = nestAccessories();
  const displays = nestDisplays();
  const services = nestServices();
  const streaming = nestStreaming();
  const connectivity = nestConnectivity();
  return (
    <div className="left-container">
      <div className="heading">
        <h2>
          Nest
        </h2>
        <button className="btn btn-outline-primary" type="button">
          Explore
        </button>
        <div className="bottom-border" />
      </div>
      <div className="row row-cols-3">
        <div className="col">
          <h3>{solutions[0]}</h3>
          <ul>
            {
              solutions.map((item) => {
                const index = solutions.indexOf(item);
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
        <div className="col ">
          <h3>{safety[0]}</h3>
          <ul>
            {
              safety.map((item) => {
                const index = safety.indexOf(item);
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
          <h3>{thermostat[0]}</h3>
          <ul>
            {
              thermostat.map((item) => {
                const index = thermostat.indexOf(item);
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
        <div className="col mt-24">
          <h3>{speakers[0]}</h3>
          <ul>
            {
              speakers.map((item) => {
                const index = speakers.indexOf(item);
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
        <div className="col mt-24">
          <h3>{cameras[0]}</h3>
          <ul>
            {
              cameras.map((item) => {
                const index = cameras.indexOf(item);
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
        <div className="col mt-24">
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
        <div className="col mt-24">
          <h3>{displays[0]}</h3>
          <ul>
            {
              displays.map((item) => {
                const index = displays.indexOf(item);
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
        <div className="col mt-24">
          <h3>{streaming[0]}</h3>
          <ul>
            {
              streaming.map((item) => {
                const index = streaming.indexOf(item);
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
        <div className="col mt-24">
          <h3>{services[0]}</h3>
          <ul>
            {
              services.map((item) => {
                const index = services.indexOf(item);
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
        <div className="col mt-24">
          <h3>{connectivity[0]}</h3>
          <ul>
            {
              connectivity.map((item) => {
                const index = connectivity.indexOf(item);
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

export default NestDescription;
