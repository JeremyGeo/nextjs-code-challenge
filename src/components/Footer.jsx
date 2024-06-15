// src/components/Footer.jsx


import React from 'react';
import styles from './css/Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={`container ${styles.container}`}>
          <ul className="footer-list">
            <li>
              <p className="h4 footer-list-title">Email</p>
            </li>
            <li>
              <p className="footer-list-subtitle">pfolio@something.com</p>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="h4 footer-list-title">Location</p>
            </li>
            <li>
              <p className="footer-list-subtitle">Jakarta -- Indonesia</p>
            </li>
          </ul>
          
        </div>
      </footer>
    );
  };
  
  export default Footer;