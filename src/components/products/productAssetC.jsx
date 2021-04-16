import React from 'react';

function ProductAssetC(props) {
  const product = props;
  return (
    <div className="c-asset-container">
      <div className="d-block">
        <div className="product-asset-container">
          <picture>
            <img src={product.img} alt="Product" className="product-img" />
          </picture>
        </div>

      </div>
    </div>

  );
}

export default ProductAssetC;
