import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import './styles.scss';
import './query.scss';

const tiktok = <FontAwesomeIcon icon={faTiktok} className='fa-xl' />
const insta = <FontAwesomeIcon icon={faInstagram} className='fa-xl' />

const Footer = () => {
  return (
    <footer>
      <img className='shhh-footer' src={require('./shhh.jpeg')} />

      <div className='media-icons'>
        <a href='#'>
          <i>
            {insta}
          </i>
        </a>

        <a href='#'>
          <i>
            {tiktok}
          </i>
        </a>
      </div>

      <div className='footer-contact'>
        <a href='#'>
          contact us.
        </a>
      </div>
    </footer>
  );
}

export default Footer;