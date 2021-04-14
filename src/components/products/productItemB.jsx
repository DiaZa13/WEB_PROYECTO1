import React from 'react';
import ProductDescriptionB from './productDescriptionB';
import ProductAsset from './productAsset';

function ProductItemB(props) {
  const product = props;
  return (
    <div className={`product-container bg-gray ${product.end}`}>
      <div className="product-organizer">
        <ProductDescriptionB
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

export default ProductItemB;
