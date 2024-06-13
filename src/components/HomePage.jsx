'use client'

// pages/index.js
import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './css/Home.module.css';

const HomePage = () => {
  useEffect(() => {
    const sliders = document.querySelectorAll('[data-slider]');
    sliders.forEach(slider => {
      const sliderContainer = slider.querySelector('[data-slider-container]');
      const sliderItems = slider.querySelectorAll('[data-slider-item]');
      const prevButton = slider.querySelector('[data-slider-prev]');
      const nextButton = slider.querySelector('[data-slider-next]');
      let currentIndex = 0;

      const updateSlider = () => {
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      };

      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        updateSlider();
      });

      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        updateSlider();
      });
    });
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className={`section ${styles.hero}`} >
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={`h1 ${styles.heroTitle}`}>Jeremy Geofany</h1>
            <p className={styles.heroSubtitle}>Web Developer</p>
            <div className={styles.heroBanner}>
              <Image src="/assets/images/hero-banner.jpg" width={800} height={800} alt="Jeremy Geofany" className="w-100" />
            </div>
            <p className={styles.sectionText}>
              As a web developer, I create interactive and visually stunning websites that enhance user experience and deliver seamless functionality.
            </p>
            <a href="mailto:michaeljohnson@company.com" className="btn has-before">About Us</a>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className={`section ${styles.service}`}>
        <div className="container">
          <div className="slider" data-slider>
            <ul className={"slider-container"} data-slider-container>
              {[
                { title: 'UI/UX Design', icon: 'download', text: 'I specialize in designing intuitive and user-friendly interfaces that prioritize user experience and engagement.', number: '01' },
                { title: 'Web Development', icon: 'desktop_windows', text: 'I develop responsive and dynamic websites using the latest web technologies and best practices.', number: '02' },
                { title: 'SEO Optimization', icon: 'show_chart', text: 'I implement SEO strategies to improve website visibility and search engine rankings, driving more organic traffic.', number: '03' },
                { title: 'E-commerce Solutions', icon: 'shopping_basket', text: 'I create robust e-commerce platforms with seamless shopping experiences and secure payment integrations.', number: '04' },
                { title: 'Branding & Identity', icon: 'palette', text: 'I help businesses establish a strong brand identity with consistent design and messaging across all platforms.', number: '05' }
              ].map((service, index) => (
                <li className="slider-item" data-slider-item key={index}>
                  <div className={styles.serviceCard}>
                    <div className={styles.cardIcon}>
                      <span className="material-icons">{service.icon}</span>
                    </div>
                    <h3 className={`h3 ${styles.cardTitle}`}>{service.title}</h3>
                    <p className={styles.cardText}>{service.text}</p>
                    <span className={styles.cardNumber}>{service.number}</span>
                    <a href="#" className={styles.layerLink} aria-label={`More about my ${service.title.toLowerCase()} service`}></a>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.sliderControls}>
              <button className={`${styles.sliderControl} ${styles.prev}`} data-slider-prev aria-label="Slide to previous item">
                <div className={styles.line}></div>
                <div className={styles.arrow}></div>
              </button>
              <button className={`${styles.sliderControl} ${styles.next}`} data-slider-next aria-label="Slide to next item">
                <div className={styles.line}></div>
                <div className={styles.arrow}></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className={`section ${styles.portfolio}`} aria-labelledby="portfolio-label">
        <div className="container">
          <p className="section-subtitle">I Make The Future</p>
          <h2 className="h2 section-title" id="portfolio-label">Portfolio</h2>
          <div className={styles.skillsWrapper}>
            <p className={styles.sectionText}>
              Phasellus et lacus suscipit congue nisl the volutpat magna. donec miss the drana risus tincidunt convallis
              velit orci congue tortor eu dignissim ipsum suam non odio. Pellenta esuntion miss the imperdiet metus
              ornare.
            </p>
          </div>
          <a href="#" className="btn has-before">
            <span className={styles.span}>Read more</span>
          <span className="material-icons">arrow_forward</span>
          </a>
          
          <div className="slider" data-slider>
            <ul className="slider-container" data-slider-container>
              {[
                { img: '/assets/images/portfolio-1.jpg', title: 'Lab. 001', text: 'Website Design' },
                { img: '/assets/images/portfolio-2.jpg', title: 'Aer Agency', text: 'Website / Development' },
                { img: '/assets/images/portfolio-3.jpg', title: 'Joker Card', text: 'UX Design / Web App' },
                { img: '/assets/images/portfolio-4.jpg', title: 'Peaky Blinders', text: 'Website / UX Design' }
              ].map((portfolio, index) => (
                <li className="slider-item" data-slider-item key={index}>
                  <div className={`${styles.portfolioCard} img-holder`} style={{ '--width': 600, '--height': 600 }}>
                    <Image src={portfolio.img} width={600} height={600} loading="lazy" alt="portfolio" className={styles.imgCover} />
                    <div className={styles.cardContent}>
                      <h3 className={`h3 ${styles.cardTitle}`}>{portfolio.title}</h3>
                      <p className={styles.cardText}>{portfolio.text}</p>
                    </div>
                    <a href="#" className={styles.layerLink}></a>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.sliderControls}>
              <button className={`${styles.sliderControl} ${styles.prev}`} data-slider-prev aria-label="Slide to previous item">
                <div className={styles.line}></div>
                <div className={styles.arrow}></div>
              </button>
              <button className={`${styles.sliderControl} ${styles.next}`} data-slider-next aria-label="Slide to next item">
                <div className={styles.line}></div>
                <div className={styles.arrow}></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
