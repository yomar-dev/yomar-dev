import React from 'react';
import { socialNetworks } from '../../constants/social-networks';

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list">
        {
          socialNetworks.map( (socialNetwork) => (
            <li key={socialNetwork.id} className="footer-list__item">
              <a href={socialNetwork.url} target="_blank" rel="noopener noreferrer" className="footer-list__item-link">
                {socialNetwork.name}
              </a>
            </li>
          ))
        }
      </ul>
    </footer>
  )
}

export default Footer;