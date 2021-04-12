import React from 'react';

export default function products() {
  return (
    <div className="products">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        {/* Pixel dropdown */}
        <li className="nav-item dropdown product-font">
          <a
            className="nav-link d-flex "
            id="pixel"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Pixel
            <span className="material-icons arrow-flip">
              expand_more
            </span>
          </a>
          {/* Pixel Dropdown menu */}
          <div className="dropdown-menu" aria-labelledby="pixel">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        {/* Nest dropdown */}
        <li className="nav-item dropdown product-font">
          <a
            className="nav-link d-flex"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Nest
            <span className="material-icons arrow-flip">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        {/* Stadia dropdowm */}
        <li className="nav-item dropdown product-font">
          <a
            className="nav-link d-flex"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Stadia
            <span className="material-icons arrow-flip">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        {/* Fitbit */}
        <li className="nav-item dropdown product-font">
          <a
            className="nav-link d-flex"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Fitbit
            <span className="material-icons arrow-flip">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        {/* Pixelbook */}
        <li className="nav-item dropdown product-font">
          <a
            className="nav-link d-flex"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Pixelbook
            <span className="material-icons arrow-flip">
              expand_more
            </span>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>

        <li className="nav-item product-font">
          <a className="nav-link">Subscriptions</a>
        </li>
        <li className="nav-item product-font">
          <a className="nav-link">Special Offers</a>
        </li>
      </ul>
    </div>

  );
}
