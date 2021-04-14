import React from 'react';

function ProductAsset(props) {
  const product = props;
  return (
    <div className="d-block">
      <div className="product-asset-container">
        <picture>
          <img src={product.img} alt="Product" className="product-img" />
        </picture>
      </div>
    </div>

  );
}

export default ProductAsset;
