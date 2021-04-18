import React from 'react';
import ScrollItem from './scrollItem';
import Items from '../../utils/scrollItems';

function ScrollProducts() {
  const items = Items();
  return (
    <div className="overflow-x-scroll mb-4">
      <div className="scroll-products pb-4">
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
      </div>
    </div>
  );
}

export default ScrollProducts;
