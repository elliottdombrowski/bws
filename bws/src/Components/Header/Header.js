import React from 'react';

import './styles.scss';
import './query.scss';

const Header = () => {
  return (
    <header>
      <div className='logo'></div>

      <ul className='right'>
        <li>
          <a href='#'>
            music
          </a>
        </li>

        <li>
          <a href='#'>
            shows
          </a>
        </li>
      </ul>

      <ul className='right'>
        <li>
          <a href='#'>
            merch
          </a>
        </li>

        <li>
          <a href='#'>
            blog
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;