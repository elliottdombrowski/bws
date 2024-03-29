import React, { useState } from 'react';
import AnimatePage from '../../AnimatePage';

import TooFast from '../../Components/TooFast/TooFast';
import Extraviolence from '../../Components/Extraviolence/Extraviolence';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';
import './query.scss';

const controlLeft = <FontAwesomeIcon icon={faAngleLeft} className='fa-2x' />
const controlRight = <FontAwesomeIcon icon={faAngleRight} className='fa-2x' />

const Homepage = () => {
  const [carousel, setCarousel] = useState(false);

  return (
    <main className='homepage'>
      <section className='featured-block'>
        <div className='control-wrapper'>
          <div className='control-left'>
            <i
              onClick={() => setCarousel(prev => !prev)}
            >
              {controlLeft}
            </i>
          </div>

          <div className='control-right'>
            <i
              onClick={() => setCarousel(prev => !prev)}
            >
              {controlRight}
            </i>
          </div>
        </div>

        {carousel ? <Extraviolence /> : <TooFast />}

        <div className='featured-links'>
          <ul>
            <li>
              <a href='#'>
                buy
              </a>
            </li>

            <li>
              <a href='#'>
                stream
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Homepage;