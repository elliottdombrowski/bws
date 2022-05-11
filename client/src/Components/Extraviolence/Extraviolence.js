import React from 'react';
import AnimatePage from '../../AnimatePage';

import './styles.scss';
import './query.scss';

const Extraviolence = () => {
  return (
    <AnimatePage>
      <div className='featured-header-extraviolence'></div>
      
      <div className='featured-img'>
        <img src={require('./extraviolence.jpeg')} />
      </div>
    </AnimatePage>
  );
}

export default Extraviolence;