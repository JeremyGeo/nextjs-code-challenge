

// pages/index.js
import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './css/Home.module.css';
import Link from 'next/link';

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
      <section className={`sectionTop ${styles.hero}`} >
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={`h1 ${styles.heroTitle}`}>Pfolio</h1>
            <p className={styles.heroSubtitle}>Web Development And Branding</p>
            <div className={styles.heroBanner}>
              <Image src="/assets/images/hero-banner.jpg" width={800} height={800} alt="Jeremy Geofany" className="w-100" />
            </div>
            <p className={styles.sectionText}>
              We create interactive and visually stunning websites that enhance user experience and deliver seamless functionality.
            </p>
            
          </div>
        </div>
      </section>
      {/* Company Overview */}

      <section className='section'>
        <div className="container">
        <p className="section-subtitle">We Make The Future</p>
          <h2 className="h2 section-title" >Your Branding And Web Development Solution</h2>
          
            <p className={styles.sectionText}>
            Founded in 2018, Pfolio is a leading agency specializing in branding and web development. Our journey began with a small team of dedicated creatives and tech enthusiasts, and has grown into a dynamic powerhouse known for innovative designs and strategic solutions. Our talented team of designers, developers, brand strategists, and digital marketers work collaboratively to deliver bespoke solutions that exceed client expectations.
            </p>

            <p className={styles.sectionText}>
            At Pfolio, we foster a culture of innovation, collaboration, and continuous learning. We believe in the power of diverse perspectives and open communication, creating an environment where creativity thrives. Passionate about our work, we are committed to transforming visions into vibrant digital experiences and driving success for businesses across industries. Join us and experience the difference of a dedicated, creative, and results-driven team.
            </p>
         
        

          <Link href="/aboutus" className="btn has-before">
          <span className={styles.span}>About Us</span>
          <span className="material-icons">arrow_forward</span>
        </Link>
        </div>
      </section>

      {/* Service Section */}
      <section className={`section ${styles.service}`}>
        <div className="container">
        
          <h2 className="h2 section-title" id="portfolio-label">Our Services</h2>
            <p className={styles.sectionText}>
            We provide cutting-edge web development, creating visually stunning and highly functional websites tailored to your needs. We specialize in brand awareness, crafting unique and impactful brand identities that resonate with your target market. Additionally, our digital marketing services drive engagement and growth through strategic campaigns across various platforms.
            </p>
          <div className="slider" data-slider>
            <ul className={"slider-container"} data-slider-container>
              {[
                { title: 'UI/UX Design', icon: 'download', text: 'We specialize in designing intuitive and user-friendly interfaces that prioritize user experience and engagement.', number: '01' },
                { title: 'Web Development', icon: 'desktop_windows', text: 'We develop responsive and dynamic websites using the latest web technologies and best practices.', number: '02' },
                { title: 'SEO Optimization', icon: 'show_chart', text: 'We implement SEO strategies to improve website visibility and search engine rankings.', number: '03' },
                { title: 'E-commerce', icon: 'shopping_basket', text: 'We create robust e-commerce platforms with seamless shopping experiences.', number: '04' },
                { title: 'Branding', icon: 'palette', text: 'We help businesses establish a strong brand identity with consistent design and messaging across all platforms.', number: '05' }
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
          <h2 className="h2 section-title" >Our Projects</h2>
          
            <p className={styles.sectionText}>
            Since 2018 we have hundreds of projects and also hundreds of satisfied clients. Our clients span a diverse range of industries, from startups to established enterprises. We take pride in the strong relationships we build and the positive impact our work has on their businesses. Our clients consistently express their satisfaction with our innovative solutions and exceptional services. Click down here to take a closer look at our projects and testimonials!
            </p>
         
          
          
          <Link href="/services" className="btn has-before">
            <span className={styles.span}>Our Projects</span>
            <span className="material-icons">arrow_forward</span>
          </Link>
          
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
