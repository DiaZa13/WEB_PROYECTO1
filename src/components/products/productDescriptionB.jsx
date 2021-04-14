import React from 'react';

function ProductDescriptionB(props) {
  const product = props;
  return (
    <div className="product-description-container">
      <div className="description1">
        {product.des1}
      </div>
      <div className="description4">
        {product.des2}
        <br />
        <span className={`${product.color}`}>
          {product.des3}
        </span>
      </div>
      <div className="button-container">
        <button className="btn btn-outline-primary" type="button">Learn more</button>
      </div>
    </div>

  );
}

export default ProductDescriptionB;
