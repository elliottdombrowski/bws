import React from 'react';
import AnimatePage from '../../AnimatePage';

import './styles.scss';
import './query.scss';

const TooFast = () => {
  return (
    <AnimatePage>
      <div className='featured-header-toofast'></div>
      
      <div className='featured-img'>
        <img src={require('./too-fast.jpeg')} />
      </div>
    </AnimatePage>
  );
}

export default TooFast;