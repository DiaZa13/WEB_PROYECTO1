import React from 'react';
import ProductDescriptionA from './productDescriptionA';
import ProductAsset from './productAsset';

function ProductItemA(props) {
  const product = props;
  return (
    <div className={`product-container bg-gray ${product.end}`}>
      <div className="product-organizer">
        <ProductDescriptionA
          des1={product.des1}
          des2={product.des2}
          des3={product.des3}
          color={product.color}
        />
        <ProductAsset
          img={product.img}
        />
      </div>
    </div>

  );
}

export default ProductItemA;
