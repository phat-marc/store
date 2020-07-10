import React from 'react';

import './menu-item.styles.scss'


// see the dynamic image styling, much wow video 65 13minutes
const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} men-itm`}>
    <div 
      className='bg-img' 
      style={{ 
        backgroundImage: `url(${imageUrl})` 
      }}  
    />
    <div className='contt'>
      <h1 className='ttl'>{title.toUpperCase()}</h1>
      <span className='sbtl'>Subtitle</span>
    </div>
  </div>
)

export default MenuItem;