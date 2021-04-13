import React from 'react';
import CollapseProduct from './collapseProduct';

function CollapseProducts() {
  return (
    <div className="products-container hide">
      <div className="collapse-products-container">
        <CollapseProduct />
        <CollapseProduct />
      </div>
    </div>
  );
}

export default CollapseProducts;
