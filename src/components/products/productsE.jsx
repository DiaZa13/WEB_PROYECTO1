import React from 'react';
import ProductDescriptionE from './productDescriptionE';
import ProductAssetC from './productAssetC';
import img from '../../assets/product8.jpg';

function ProductsE() {
  return (
    <div className="bg-secondary" data-aos="fade-right">
      <div className="products-container-p">
        <ProductDescriptionE
          des1="Meet Fitbit."
          des2=" Now a member of the Google family."
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
