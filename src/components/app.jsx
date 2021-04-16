import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import NavBar from './navBar/navBar';
import CollapseProducts from './navBar/collapse/collapseProducts';
import Carousel from './carousel/carousel';
import ProductsA from './products/productsA';
import ProductsB from './products/productsB';
import ProductsC from './products/productsC';
import ProductsD from './products/productsD';
import ScrollProducts from './scrollProducts/scrollProducts';
import ProductsE from './products/productsE';
import Black from './home/black';

function App() {
  return (
    <div>
      <NavBar />
      <div id="products" className="collapse">
        <CollapseProducts />
      </div>
      <div className="main-view">
        <div className="carousel-space">
          <div className="position-relative carousel-main-container">
            <Carousel />
          </div>
        </div>

        <ScrollProducts />
        <ProductsA />
        <ProductsB />
        <ProductsC />
        <ProductsD />
        <ProductsE />
        <Black />
      </div>
    </div>

  );
}

export default App;
