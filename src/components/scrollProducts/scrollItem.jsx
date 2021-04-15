import React from 'react';
import ScrollAsset from './scrollAsset';

function ScrollItem(props) {
  const item = props;
  return (
    <div className="scroll-item">
      <ScrollAsset
        img={item.img}
      />
      <div className="description1 my-0 mx-auto">{item.description}</div>
    </div>
  );
}

export default ScrollItem;
