import React from 'react';
import ScrollItem from './scrollItem';
import Items from '../../utils/scrollItems';

function ScrollProducts() {
  const items = Items();
  return (
    <div>
      <div className="scroll-products">
        {
          items.map((item) => {
            const index = items.indexOf(item);
            return (
              <ScrollItem
                key={index}
                img={item.img}
                description={item.description}
              />
            );
          })
        }
        <div className="scroll-design">
          <div className="scroll-line">
            <div className="line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScrollProducts;
