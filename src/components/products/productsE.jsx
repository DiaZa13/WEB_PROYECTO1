import React from 'react';
import ProductDescriptionC from './productDescriptionC';
import ProductAssetC from './productAssetC';
import img from '../../assets/product8.jpg';

function ProductsE() {
  return (
    <div className="bg-secondary">
      <div className="products-container-p">
        <ProductDescriptionC
          des1="Meet Fitbit."
          des2="Meet Fitbit."
          des3=" Now a member of the Google family."
          color="text-aqua"
        />
        <ProductAssetC
          img={img}
        />
      </div>
    </div>

  );
}

export default ProductsE;
