import React from 'react';
import test from '../../../assets/pixel_collapse.jpg';

function CollapseProduct() {
  return (
    <button type="button" className="buttonCollapse">
      <img src={test} alt="Pixel" className="collapseProduct" />
      <span className="mt-2">PIXEL</span>
    </button>

  );
}

export default CollapseProduct;
