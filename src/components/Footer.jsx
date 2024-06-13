// src/components/Footer.jsx


import React from 'react';
// import { IonIcon } from '@ionic/react';
// import { logoDribbble, logoInstagram, logoSkype, logoLinkedin } from 'ionicons/icons';
import styles from './css/Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={`container${styles.container}` }>
          <ul className="footer-list">
            <li>
              <p className="h4 footer-list-title">Get in touch</p>
            </li>
            <li>
              <a href="mailto:info@kwilliams.com" className="footer-link">info@kwilliams.com</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="h4 footer-list-title">Locations</p>
            </li>
            <li>
              <a href="#" className="footer-link">San Francisco — California</a>
            </li>
          </ul>
          <ul className={styles.socialList}>
            <li>
              <a href="#" className={styles.socialLink}>
                {/* <IonIcon icon={logoDribbble} /> */}
              </a>
            </li>
            <li>
              <a href="#" className={styles.socialLink}>
                {/* <IonIcon icon={logoInstagram} /> */}
              </a>
            </li>
            
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;