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
import Black from './info/black';
import Gray from './info/gray';
import Policies from './info/policies';
import Services from './info/services';
import Footer from './info/footer';

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
        <Gray />
        <Policies />
        <Services />
        <Footer />
      </div>
    </div>

  );
}

export default App;
