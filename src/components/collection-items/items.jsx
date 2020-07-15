import React from 'react';

import './items.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='coll-item'> 
    <div
    className='image'
    style={{
      backgroundImage:  `URL(${imageUrl})`
    }}
    />
    <div className='footer'>
      <span className='name'>{ name }</span>
      <span className='price'>{ price }</span>
    </div>
  </div>
)

export default CollectionItem;