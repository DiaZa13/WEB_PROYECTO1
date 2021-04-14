import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import NavBar from './navBar/navBar';
import CollapseProducts from './navBar/collapse/collapseProducts';
import Carousel from './carousel/carousel';
import ProductsA from './products/productsA';
import ProductsB from './products/productsB';
import ProductsC from './products/productsC';
import ProductsD from './products/productsD';

function App() {
  return (
    <div>
      <NavBar />
      <div id="products" className="collapse">
        <CollapseProducts />
      </div>
      <div className="main-view">
        <div className="position-relative carousel-main-container" style={{ height: '600px' }}>
          <Carousel />
        </div>
        <ProductsA />
        <ProductsB />
        <ProductsC />
        <ProductsD />
      </div>
    </div>

  );
}

export default App;
