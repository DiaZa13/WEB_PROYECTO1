// First different color
import React from 'react';

function ProductDescriptionA(props) {
  const product = props;
  return (
    <div className="product-description-container">
      <div className="description1">
        {product.des1}
      </div>
      <div className="description4">
        <span className={`${product.color}`}>
          {product.des2}
        </span>
        <br />
        {product.des3}
      </div>
      <div className="button-container">
        <button className="btn btn-outline-primary" type="button">Learn more</button>
      </div>
    </div>

  );
}

export default ProductDescriptionA;
