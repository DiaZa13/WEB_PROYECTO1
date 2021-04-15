import React from 'react';
import img from '../../assets/overflow.png';

function ScrollAsset(props) {
  const item = props;
  return (
    <div className="scroll-asset-container">
      <div className="scroll-asset">
        <picture>
          <img src={item.img} alt="Product" className="d-block w-100" />
        </picture>
      </div>
    </div>

  );
}

export default ScrollAsset;
