// src/components/Footer.jsx


import React from 'react';
import styles from './css/Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={`container ${styles.container}`}>
          <ul className="footer-list">
            <li>
              <p className="h4 footer-list-title">Get in touch</p>
            </li>
            <li>
              <a className="footer-link">pfolio@something.com</a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="h4 footer-list-title">Locations</p>
            </li>
            <li>
              <a className="footer-link">Jakarta -- Indonesia</a>
            </li>
          </ul>
          
        </div>
      </footer>
    );
  };
  
  export default Footer;