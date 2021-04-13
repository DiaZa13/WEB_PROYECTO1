import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import Product from './products';
import Services from './services';

function NavBar() {
  return (
    <div style={{ height: '56px' }}>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <button
          className="navbar-toggler mr-3"
          type="button"
          data-toggle="collapse"
          data-target="#products"
          aria-controls="products"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="material-icons">
            menu
          </span>
        </button>
        <div className="d-flex flex-grow-1 justify-content-between align-items-center" style={{ height: 'inherit' }}>
          {/* Google logo */}
          <a style={{ height: '24px' }} aria-label="Google store logo">
            <div className="logo-bg-large">
              {/* Tomado de la pagina oficial de google store */}
              <svg viewBox="0 0 867 155">
                <g>
                  <g fill="#5F6368">
                    <path d="M865.7 108c-2.4 4.3-5.8 8-9.9 10.7-4.3 2.9-9.5 4.3-15.8 4.3-3.9 0-7.8-.7-11.4-2.2-3.4-1.4-6.5-3.5-9.1-6.1-2.6-2.7-4.6-5.8-6-9.3-2.8-7.4-2.9-15.6-.1-23.1 1.3-3.4 3.2-6.6 5.7-9.3 2.5-2.7 5.5-4.9 8.8-6.4 3.6-1.6 7.5-2.4 11.5-2.4 3.9-.1 7.8.7 11.4 2.1 3.2 1.4 6.1 3.4 8.5 6 2.4 2.7 4.2 5.8 5.3 9.2 1.3 3.8 1.9 7.8 1.7 11.8 0 1-.1 2-.2 2.9h-42.3c.2 2.4.8 4.7 1.9 6.9 1 1.8 2.3 3.5 3.9 4.8 1.5 1.3 3.3 2.2 5.1 2.8 1.8.6 3.6.9 5.5.9 3.2.1 6.3-.8 8.9-2.6 2.3-1.7 4.3-3.9 5.7-6.4l10.9 5.4zm-11.6-21.3c-.2-1.3-.6-2.6-1.1-3.8-.6-1.4-1.5-2.7-2.6-3.8-1.3-1.3-2.8-2.3-4.5-3-2.1-.9-4.4-1.3-6.7-1.2-3.4-.1-6.7 1.1-9.3 3.2-2.6 2.2-4.5 5.2-5.2 8.6h29.4zM670.7 76.9h-9.6V66h9.6V49.3H683V66h13.4v10.9H683v24.9c0 1.3.1 2.5.4 3.8.2 1 .7 2 1.3 2.9 1.2 1.4 2.9 2.2 4.8 2.2.9 0 1.9-.1 2.8-.3.7-.2 1.4-.5 2.1-.8l3.8 10.9c-1.6.6-3.2 1.1-4.9 1.4-1.9.4-3.8.5-5.8.5-2.4 0-4.7-.4-6.9-1.2-1.9-.8-3.7-1.9-5.2-3.4-3.2-3.2-4.8-7.7-4.8-13.3l.1-27.6zM732.1 64.2c3.9 0 7.8.7 11.4 2.2 3.4 1.4 6.4 3.4 9 6.1 2.6 2.7 4.6 5.8 5.9 9.2 2.8 7.4 2.8 15.7 0 23.1-1.3 3.4-3.3 6.6-5.9 9.2-2.6 2.6-5.6 4.7-9 6.1-7.4 2.9-15.5 2.9-22.9 0-3.4-1.4-6.4-3.4-9-6.1-2.6-2.7-4.6-5.8-5.9-9.2-2.8-7.4-2.8-15.7 0-23.1 1.3-3.4 3.3-6.6 5.9-9.2 2.6-2.6 5.6-4.7 9-6.1 3.7-1.5 7.6-2.2 11.5-2.2zm0 46.6c2.1 0 4.1-.4 6-1.2 1.9-.8 3.7-2 5.2-3.4 1.6-1.6 2.8-3.4 3.6-5.5 1.8-4.8 1.8-10 0-14.8-.8-2.1-2-3.9-3.6-5.5-1.5-1.5-3.2-2.6-5.2-3.4a15.6 15.6 0 00-12 0c-1.9.8-3.7 2-5.2 3.4-1.6 1.6-2.8 3.4-3.6 5.5-1.8 4.8-1.8 10 0 14.8.8 2.1 2 3.9 3.6 5.5 1.5 1.5 3.2 2.6 5.2 3.4 1.9.7 3.9 1.2 6 1.2zM771.7 66h11.8v8.3h.7c.7-1.5 1.6-2.8 2.8-4 1.2-1.2 2.5-2.3 3.9-3.2 1.5-.9 3-1.6 4.6-2.1 1.5-.5 3.1-.8 4.7-.8s3.1.1 4.6.5c1.3.4 2.5.9 3.7 1.5l-4.1 11.1c-.8-.3-1.6-.5-2.4-.7-1.2-.2-2.4-.3-3.7-.3-1.9 0-3.8.4-5.6 1.2-1.7.8-3.2 2-4.4 3.4-1.3 1.5-2.3 3.2-3 5.1-.7 2-1.1 4.1-1.1 6.2v28.2h-12.5V66zM609.5 116.2c2.7 2 5.8 3.5 9 4.5 6.5 2 13.5 2 20.1.1 3.4-.9 6.5-2.5 9.3-4.5 2.8-2.1 5.1-4.8 6.8-7.8 1.9-3.5 2.8-7.4 2.7-11.4.1-3.3-.5-6.6-1.7-9.7-1.1-2.7-2.8-5.2-4.8-7.3-2.1-2.2-4.6-4-7.3-5.4-3-1.6-6.1-2.9-9.3-4l-5.5-2c-4.1-1.3-7.9-3.1-11.4-5.5-2.6-1.8-4.1-4.8-4.1-8 0-1.6.4-3.2 1.2-4.5.8-1.4 1.9-2.6 3.1-3.6 1.4-1.1 3-1.9 4.6-2.3 1.8-.6 3.7-.8 5.7-.8s4.1.3 6 1c1.6.6 3.1 1.5 4.5 2.5 1.2 1 2.3 2.2 3.1 3.5.6 1 1.2 2.1 1.6 3.2l11.4-4.8c-.7-1.9-1.7-3.7-2.7-5.4-1.4-2.2-3.1-4.1-5.2-5.8-2.4-1.9-5.1-3.4-7.9-4.4-3.5-1.2-7.2-1.8-11-1.7-3.7 0-7.4.6-10.9 1.9-3.1 1.1-6 2.9-8.5 5.1-2.3 2.1-4.2 4.6-5.5 7.4-1.3 2.8-2 5.9-2 9-.1 3.1.6 6.1 1.8 8.9 1.2 2.5 2.8 4.7 4.8 6.6 2 1.9 4.2 3.5 6.6 4.8 2.3 1.3 4.7 2.3 7.2 3.2l5.5 2c2.8 1 5.5 2.1 8.2 3.4 2 .9 3.9 2.1 5.6 3.6 1.4 1.2 2.4 2.6 3.2 4.2.7 1.6 1 3.4 1 5.1 0 2-.4 3.9-1.4 5.6-.9 1.6-2.1 3-3.5 4.1-1.5 1.1-3.2 2-5.1 2.5-2 .5-4 .8-6 .8-2.4 0-4.7-.4-6.9-1.3-2-.9-3.9-2.1-5.5-3.6-1.7-1.5-3.1-3.3-4.1-5.3-1-1.9-1.8-3.8-2.4-5.9L597.6 99c1 3.5 2.6 6.8 4.6 9.8 2 2.9 4.5 5.4 7.3 7.4z" />
                  </g>
                  <g fill="#5F6368">
                    <path d="M242.7 122.2c-24.8 0-45.7-20.2-45.7-45s20.9-45 45.7-45c11.5-.2 22.6 4.3 30.8 12.4l-8.7 8.7c-5.9-5.7-13.9-8.9-22.2-8.8-18.1 0-32.3 14.6-32.3 32.7s14.2 32.7 32.3 32.7c11.7 0 18.4-4.7 22.7-9 3.5-3.5 5.8-8.6 6.7-15.5h-29.4V73.2H284c.5 2.5.7 5.1.7 7.7 0 9.2-2.5 20.6-10.6 28.8-7.9 8.1-18 12.5-31.4 12.5zM350.2 93.2c.1 15.9-12.8 28.9-28.7 29-15.9.1-28.9-12.8-29-28.7v-.3c-.1-15.9 12.8-28.9 28.7-29 15.9-.1 28.9 12.8 29 28.7v.3zm-12.6 0c0-10.4-7.5-17.6-16.2-17.6s-16.2 7.1-16.2 17.6c0 10.3 7.5 17.6 16.2 17.6s16.2-7.2 16.2-17.6zM414.2 93.2c.1 15.9-12.8 28.9-28.7 29-15.9.1-28.9-12.8-29-28.7v-.3c-.1-15.9 12.8-28.9 28.7-29 15.9-.1 28.9 12.8 29 28.7v.3zm-12.6 0c0-10.4-7.5-17.6-16.2-17.6s-16.2 7.1-16.2 17.6c0 10.3 7.5 17.6 16.2 17.6s16.2-7.2 16.2-17.6zM476.9 66v52c0 21.4-12.6 30.2-27.6 30.2-11.2.1-21.4-6.7-25.7-17.1l11.1-4.6c2 4.7 6.8 10.3 14.6 10.3 9.6 0 15.5-5.9 15.5-17v-4.2h-.4c-2.9 3.5-8.3 6.6-15.3 6.6-14.5 0-27.8-12.6-27.8-28.9 0-16.4 13.3-29.1 27.8-29.1 6.9 0 12.4 3.1 15.3 6.5h.4V66h12.1zm-11.2 27.3c0-10.2-6.8-17.7-15.5-17.7-8.8 0-16.1 7.5-16.1 17.7 0 10.1 7.4 17.4 16.1 17.4 8.7.1 15.5-7.3 15.5-17.4zM502.5 35.3v85.2h-12.7V35.3h12.7zM556.7 102.8l9.9 6.6c-5.4 8.1-14.5 12.9-24.1 12.8-16.5 0-28.8-12.7-28.8-29 0-17.2 12.4-29 27.3-29 15 0 22.4 12 24.8 18.4l1.3 3.3-38.7 16c3 5.8 7.6 8.8 14 8.8s11-3.1 14.3-7.9zm-30.4-10.4l25.9-10.8c-1.4-3.6-5.7-6.1-10.8-6.1-6.5 0-15.5 5.7-15.1 16.9z" />
                  </g>
                  <path d="M154.5 79c.1-5.3-.5-10.6-1.7-15.8h-74v28.6h43.4c-.9 7.2-5.6 17.8-16.1 25v18.9H131c14.8-13.4 23.5-33.2 23.5-56.7z" fill="#4285F4" />
                  <path d="M78.8 154.5c21.3 0 39.1-6.9 52.2-18.7l-24.9-18.9c-6.6 4.6-15.6 7.8-27.3 7.8-20.3 0-38.3-12.9-44.9-32.1H8.4V112c13.7 26.1 40.8 42.6 70.4 42.5z" fill="#34A853" />
                  <path d="M33.9 92.5c-3.4-9.9-3.4-20.6 0-30.5V42.6H8.4a75.07 75.07 0 000 69.3l25.5-19.4z" fill="#FBBC04" />
                  <path d="M78.8 29.9c14.8 0 24.7 6.3 30.4 11.5l22.3-21.2C117.9 7.7 100.1 0 78.8 0 49.2-.1 22.1 16.3 8.4 42.6L33.9 62c6.6-19.2 24.6-32.1 44.9-32.1z" fill="#EA4335" />
                </g>
              </svg>
            </div>
          </a>
          <div className="collapse navbar-collapse align-items-center" style={{ height: 'inherit' }}>
            <Product />
          </div>
          <Services />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
