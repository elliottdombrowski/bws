import React from 'react';

import './styles.scss';
import './query.scss';

const Homepage = () => {
  return (
    <main className='homepage'>
      <section className='featured-block'>
        <div className='featured-header'></div>

        <div className='featured-img'>
          <img src={require('./too-fast.jpeg')} />
        </div>
      </section>
    </main>
  );
};
 
export default Homepage;