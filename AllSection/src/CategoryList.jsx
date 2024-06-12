
import React, { useState } from 'react';

const CategoryList = () => {
  const [showList, setShowList] = useState(false);

  const categories = [
    'Trending',
    'Best Sellers',
    'New Releases',
    'Movers and Shakers',
    'Digital Content and Devices',
    'Amazon miniTV - FREE entertainment',
    'Echo & Alexa',
    'Fire TV',
    'Kindle E-Readers & eBooks',
    'Audible Audiobooks',
    'Amazon Prime Video',
    'Amazon Prime Music'
  ];

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div>
      <button onClick={toggleList}>
        {showList ? 'X' : 'Show Categories'}
      </button>
      {showList && (
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryList;