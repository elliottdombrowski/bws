import React from 'react';

import './styles.scss';
import './query.scss';

const TooFast = () => {
  return (
    <>
      <div className='featured-header-toofast'></div>
      
      <div className='featured-img'>
        <img src={require('./too-fast.jpeg')} />
      </div>
    </>
  );
}

export default TooFast;