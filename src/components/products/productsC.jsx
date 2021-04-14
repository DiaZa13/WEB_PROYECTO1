import React from 'react';
import ProductDescriptionC from './productDescriptionC';
import ProductAssetC from './productAssetC';
import img from '../../assets/product5.jpg';

function ProductsC() {
  return (
    <div className="bg-secondary">
      <div className="products-container">
        <ProductDescriptionC
          des1="Meet the new Nest Hub"
          des2="The center of"
          des3=" your helpful home."
          color="text-green"
        />
        <ProductAssetC
          img={img}
        />
      </div>
    </div>

  );
}

export default ProductsC;
