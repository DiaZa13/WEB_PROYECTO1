import React from 'react';

function ProductDescriptionC(props) {
  const product = props;
  return (
    <div className="product-organizer c-description-container">
      <div>
        <div className="description1">
          {product.des1}
        </div>
        <div className="description4">
          {product.des2}
          <span className={`${product.color}`}>
            {product.des3}
          </span>
        </div>
        <div className="button-container">
          <button className="btn btn-outline-primary" type="button">Learn more</button>
        </div>
      </div>
    </div>

  );
}

export default ProductDescriptionC;
