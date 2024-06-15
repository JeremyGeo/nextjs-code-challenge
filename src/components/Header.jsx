

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './css/Header.module.css'; 

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  const handleNavToggle = () => {
    setNavActive(!navActive);
    document.body.classList.toggle('nav-active', !navActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${headerActive ? styles.active : ''}`} data-header>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/assets/images/logo.svg" alt="Logo" width={170} height={40} />
        </Link>
        <button
          className={`${styles['nav-toggle-btn']} ${navActive ? styles.active : ''}`}
          data-nav-toggler
          data-nav-toggle-btn
          aria-label="Toggle menu"
          onClick={handleNavToggle}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
        <nav className={`${styles.navbar} ${navActive ? styles.active : ''}`} data-navbar>
          <ul className={styles['navbar-list']}>
            <li>
              <Link href="/" className={styles['navbar-link']} onClick={handleNavToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/aboutus" className={styles['navbar-link']} onClick={handleNavToggle}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className={styles['navbar-link']} onClick={handleNavToggle}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/team" className={styles['navbar-link']} onClick={handleNavToggle}>
                Teams
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${styles.overlay} ${navActive ? styles.active : ''}`}
          data-nav-toggler
          data-overlay
          onClick={handleNavToggle}
        ></div>
      </div>
    </header>
  );
};

export default Header;
