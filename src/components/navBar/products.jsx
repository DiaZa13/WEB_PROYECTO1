import React, { useState } from 'react';
import PixelDropdown from './dropdowm/pixel/pixelDropdown';
import NestDropdown from './dropdowm/nest/nestDropdown';
import StadiaDropdown from './dropdowm/stadia/stadiaDropdown';
import FitbitDropdown from './dropdowm/fitbit/fitbitDropdown';
import PixelbookDropdown from './dropdowm/pixelbook/pixelbookDropdown';

export default function products() {
  const [expanded, setExpanded] = useState({
    pixel: false,
    nest: false,
    stadia: false,
    fitbit: false,
    pixelbook: false,
  });

  const handleClick = (e) => {
    if (e.target.name === 'pixel') {
      setExpanded({
        ...expanded,
        pixel: !expanded.pixel,
        nest: false,
        stadia: false,
        fitbit: false,
        pixelbook: false,
      });
    } else if (e.target.name === 'nest') {
      setExpanded({
        ...expanded,
        pixel: false,
        nest: !expanded.nest,
        stadia: false,
        fitbit: false,
        pixelbook: false,
      });
    } else if (e.target.name === 'stadia') {
      setExpanded({
        ...expanded,
        pixel: false,
        nest: false,
        stadia: !expanded.stadia,
        fitbit: false,
        pixelbook: false,
      });
    } else if (e.target.name === 'fitbit') {
      setExpanded({
        ...expanded,
        pixel: false,
        nest: false,
        stadia: false,
        fitbit: !expanded.fitbit,
        pixelbook: false,
      });
    } else {
      setExpanded({
        ...expanded,
        pixel: false,
        nest: false,
        stadia: false,
        fitbit: false,
        pixelbook: !expanded.pixelbook,
      });
    }
  };

  return (
    <div className="products">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        {/* Pixel dropdown */}
        <li className={`nav-item dropdown product-font ${expanded.pixel ? 'show' : ''}`}>
          <button
            onClick={handleClick}
            className="nav-link d-flex button"
            name="pixel"
            aria-expanded={expanded.pixel}
            type="button"
          >
            Pixel
            <span className="material-icons arrow-flip">
              expand_more
            </span>
          </button>
        </li>
        {/* Pixel Dropdown menu */}
        <div
          aria-expanded={expanded.pixel}
          aria-labelledby="pixel"
        >
          <PixelDropdown />
        </div>
        {/* Nest dropdown */}
        <li className={`nav-item dropdown product-font ml-20 ${expanded.nest ? 'show' : ''}`}>
          <button
            onClick={handleClick}
            className="nav-link d-flex button"
            name="nest"
            aria-expanded={expanded.nest}
            type="button"
          >
            Nest
            <span className="material-icons arrow-flip">
              expand_more
            </span>
          </button>
        </li>
        {/* Nest Dropdown menu */}
        <div
          aria-expanded={expanded.nest}
          aria-labelledby="nest"
        >
          <NestDropdown />
        </div>
        {/* Stadia dropdown */}
        <li className={`nav-item dropdown product-font ml-20 ${expanded.stadia ? 'show' : ''}`}>
          <button
            onClick={handleClick}
            className="nav-link d-flex button"
            name="stadia"
            aria-expanded={expanded.stadia}
            type="button"
          >
            Stadia
            <span className="material-icons arrow-flip">
              expand_more
            </span>
          </button>
        </li>
        {/* Stadia Dropdown menu */}
        <div
          aria-expanded={expanded.stadia}
          aria-labelledby="stadia"
        >
          <StadiaDropdown />
        </div>
        {/* Fitbit */}
        <li className={`nav-item dropdown product-font ml-20 ${expanded.fitbit ? 'show' : ''}`}>
          <button
            onClick={handleClick}
            className="nav-link d-flex button"
            name="fitbit"
            aria-expanded={expanded.fitbit}
            type="button"
          >
            Fitbit
            <span className="material-icons arrow-flip">
              expand_more
            </span>
          </button>
        </li>
        {/* Fitbit Dropdown menu */}
        <div
          aria-expanded={expanded.fitbit}
          aria-labelledby="fitbit"
        >
          <FitbitDropdown />
        </div>
        {/* Pixelbook */}
        <li className={`nav-item dropdown product-font ml-20 ${expanded.pixelbook ? 'show' : ''}`}>
          <button
            onClick={handleClick}
            className="nav-link d-flex button"
            name="pixelbook"
            aria-expanded={expanded.pixelbook}
            type="button"
          >
            Pixelbook
            <span className="material-icons arrow-flip">
              expand_more
            </span>
          </button>
        </li>
        {/* Pixelbook Dropdown menu */}
        <div
          aria-expanded={expanded.pixelbook}
          aria-labelledby="pixelbook"
        >
          <PixelbookDropdown />
        </div>

        <li className="nav-item product-font ml-20">
          <button className="nav-link button" type="button">Subscriptions</button>
        </li>
        <li className="nav-item product-font ml-20">
          <button className="nav-link button" type="button">Special Offers</button>
        </li>
      </ul>
    </div>

  );
}
