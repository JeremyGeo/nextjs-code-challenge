/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import stylesHome from './css/Home.module.css';
import stylesAboutUs from './css/AboutUs.module.css';



const ServicesPage = () => {
    

  return (
    <>
      {/* Portfolio Section */}
      <section className={`sectionTop ${stylesHome.portfolio}`} aria-labelledby="portfolio-label">
        <div className="container">
          
          <h2 className="h2 section-title">Our Services</h2>
         
            <p className={stylesHome.sectionText}>
            We offer a comprehensive suite of services designed to elevate your brand and enhance your digital presence. Our web development team creates visually stunning and highly functional websites that are tailored to meet your specific needs. In branding, we craft unique and impactful brand identities that resonate with your target audience and set you apart from the competition. Lastly our digital marketing experts develop strategic campaigns that drive engagement and growth across various platforms.
            </p>
          

          <div className={stylesHome.servicePortfolio}>
            <ul className={stylesHome.gridList}>
              <li className="slider-item" >
                  <div className={`${stylesHome.portfolioCard} img-holder`} style={{ '--width': 600, '--height': 600 }}>
                    <Image src='/assets/images/portfolio-1.jpg' width={600} height={600} loading="lazy" alt="portfolio" className={stylesHome.imgCover} />
                    <div className={stylesHome.cardContent}>
                      <h3 className={`h3 ${stylesHome.cardTitle}`}>Lab. 001</h3>
                      <p className={stylesHome.cardText}>Website Design</p>
                    </div>
                    
                  </div>
                </li>
                <li className="slider-item" >
                  <div className={`${stylesHome.portfolioCard} img-holder`} style={{ '--width': 600, '--height': 600 }}>
                    <Image src='/assets/images/portfolio-2.jpg' width={600} height={600} loading="lazy" alt="portfolio" className={stylesHome.imgCover} />
                    <div className={stylesHome.cardContent}>
                      <h3 className={`h3 ${stylesHome.cardTitle}`}>Lab. 002</h3>
                      <p className={stylesHome.cardText}>Brand Management</p>
                    </div>
                    
                  </div>
                </li>
                <li className="slider-item" >
                  <div className={`${stylesHome.portfolioCard} img-holder`} style={{ '--width': 600, '--height': 600 }}>
                    <Image src='/assets/images/portfolio-3.jpg' width={600} height={600} loading="lazy" alt="portfolio" className={stylesHome.imgCover} />
                    <div className={stylesHome.cardContent}>
                      <h3 className={`h3 ${stylesHome.cardTitle}`}>Lab. 003</h3>
                      <p className={stylesHome.cardText}>Website Design And Google Ads</p>
                    </div>
                    
                  </div>
                </li>
                <li className="slider-item" >
                  <div className={`${stylesHome.portfolioCard} img-holder`} style={{ '--width': 600, '--height': 600 }}>
                    <Image src='/assets/images/portfolio-1.jpg' width={600} height={600} loading="lazy" alt="portfolio" className={stylesHome.imgCover} />
                    <div className={stylesHome.cardContent}>
                      <h3 className={`h3 ${stylesHome.cardTitle}`}>Lab. 004</h3>
                      <p className={stylesHome.cardText}>Website Design And Social Media</p>
                    </div>
                    
                  </div>
                
              </li>
              {/* Other portfolio items */}
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`section ${stylesAboutUs.team}`} aria-labelledby="team-label">
        <div className="container">
          
          <h2 className="h2 section-title">Let's Hear What Others Say</h2>
          <div className={stylesAboutUs.team}>
            <ul className={stylesAboutUs['grid-list']}>
              {Array(3).fill().map((_, index) => (
                <li key={index}>
                  <div className={stylesAboutUs['team-card']}>
                    <figure className={`img-holder ${stylesAboutUs['card-banner']}`} style={{ '--width': 560, '--height': 350 }}>
                      <Image src='/assets/images/portfolio-1.jpg' width={560} height={350} loading="lazy" alt="Team member" className={stylesAboutUs.imgCover} />
                    </figure>
                    <div className={stylesAboutUs['card-content']}>
                      <h2 className={stylesAboutUs['card-title']}>John Doe</h2>
                      <p className={stylesAboutUs['card-text']}>
                        lorem ipsum bla bla bla
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
