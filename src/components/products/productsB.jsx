import React from 'react';
import ProductItemA from './productItemA';
import ProductItemB from './productItemB';
import img from '../../assets/product2.jpg';
import img1 from '../../assets/product3.jpg';
import img2 from '../../assets/product4.jpg';

function ProductsB() {
  return (
    <div className="bg-secondary">
      <div className="products-container">
        <ProductItemA
          end="column-end-4"
          des1="Nest Audio Entertainment packages"
          des2="Built for music."
          des3="Made for you."
          color="text-orange"
          img={img}
        />
        <ProductItemB
          end="column-end-4"
          des1="Nest Video Entertainment packages"
          des2="So much to watch."
          des3="So easy to find."
          color="text-blue"
          img={img1}
        />
        <ProductItemB
          end="column-end-4"
          des1="Nest Home Security packages"
          des2="Your home,"
          des3="safe and sound"
          color="text-red"
          img={img2}
        />
      </div>
    </div>

  );
}

export default ProductsB;
