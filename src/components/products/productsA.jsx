import React from 'react';
import ProductItemA from './productItemA';
import ProductItemB from './productItemB';
import img from '../../assets/product.jpg';
import img1 from '../../assets/product1.jpg';

function ProductsA() {
  return (
    <div className="bg-secondary">
      <div className="products-container-p">
        <ProductItemB
          end="column-end-6"
          des1="Explore Pixel phones"
          des2="Capture the details."
          des3="Capture your world."
          color="text-blue"
          img={img}
        />
        <ProductItemA
          end="column-end-6"
          des1="Nest Audio"
          des2="Amazing sound."
          des3="At your command."
          color="text-green"
          img={img1}
        />
      </div>
    </div>

  );
}

export default ProductsA;
