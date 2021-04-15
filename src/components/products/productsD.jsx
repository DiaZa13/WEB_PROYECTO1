import React from 'react';
import ProductItemA from './productItemA';
import ProductItemB from './productItemB';
import img from '../../assets/product6.jpg';
import img1 from '../../assets/product7.jpg';

function ProductsD() {
  return (
    <div className="bg-secondary">
      <div className="products-container-p">
        <ProductItemA
          end="column-end-6"
          des1="Nest Wifi"
          des2="Fast, reliable Wi‑Fi"
          des3="for your whole home."
          color="text-orange"
          img={img}
        />
        <ProductItemB
          end="column-end-6"
          des1="Nest Hub Max"
          des2="Help for your home."
          des3="All in one display."
          color="text-blue"
          img={img1}
        />
      </div>
    </div>

  );
}

export default ProductsD;
