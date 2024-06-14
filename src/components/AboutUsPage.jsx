/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './css/AboutUs.module.css';

import axios from 'axios';

const AboutUsPage = () => {

  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=3'); // Fetch 3 random users
        const teamData = response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          image: user.picture.large,
          text: 'Mauris convallis non ligula non interdum. Gravida vulputate convallis tempus vestibulum cras imperdiet nun eu dolor.', // Static text for demonstration
        }));
        setTeam(teamData);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeam();
  }, []);

    return (
      <>
        {/* About Us Section */}
        <section className={`sectionTop ${styles.about}`} id="about" aria-label="about">
          <div className="container">
            <h2 className="h2 section-title">About Us</h2>
          </div>
          
          <div className={styles.aboutContainer}>
            <div className={`${styles['about-banner']} img-holder`}>
              <Image src="/assets/images/hero-banner.jpg" alt="about banner" className={styles.imgCover} width={800} height={600}  />
            </div>
  
            <div className={styles['about-content']}>
              <h3 className="h3">Who We Are</h3>
              <p className="section-text">
              Pfolio was founded in 2018 with a vision to revolutionize the digital landscape through innovative branding and web development solutions. Starting as a small team of passionate creatives and tech enthusiasts, we embarked on a journey to help businesses build powerful online presences.
              </p>
  
              <h3 className="h3">Our Successes</h3>
              <ul className={styles['about-list']}>
                <li className={styles['about-item']}>
                </li>
                <li className={styles['about-item']}>
                  <p className="section-text">
                  2019: Launched our first major project, setting a new standard for web development in our industry.
                  </p>
                </li>
                <li className={styles['about-item']}>
                  <p className="section-text">
                  2020: Expanded our team to include expert brand strategists and digital marketers, broadening our service offerings.
                  </p>
                </li>
                <li className={styles['about-item']}>
                  <p className="section-text">
                  2022: Opened a new office in Jakarta, reflecting our continued growth and expansion.
                  </p>
                </li>
               
              </ul>
  
              <h3 className="h3">Our Mission</h3>
              <p className="section-text">
              Our mission is to transform visions into vibrant digital experiences. We are dedicated to delivering innovative, high-quality branding and web development solutions that drive success for businesses of all sizes. 
              </p>
            </div>
          </div>
        </section>
  
        {/* Our Culture Section */}
        <section className={`section ${styles.culture}`} aria-labelledby="culture-label">
          <div className="container">
            <h2 className="h2 title section-title">Our Culture</h2>
            
  
            <div className={styles.wrapper}>
              <figure className={styles['culture-banner']}>
                <Image src="/assets/images/process-banner.png" alt="culture banner" className="w-100" width={800} height={800} />
              </figure>
  
              <ul className={styles['grid-list']}>
                <li className={styles['culture-item']}>
                  <Image src='/assets/images/process-icon-1.png' width={60} height={60} loading="lazy" className={styles['item-icon']} alt="" />
                  <h3 className="h3 title item-title">Ideation</h3>
                  <p className="item-text">
                  We encourage our team to think outside the box and explore new ideas.
                  </p>
                </li>
                <li className={styles['culture-item']}>
                  <Image src='/assets/images/process-icon-2.png' width={60} height={60} loading="lazy" className={styles['item-icon']} alt="" />
                  <h3 className="h3 title item-title">Budget</h3>
                  <p className="item-text">
                  We are commited to delivering high-quality solutions without unnecessary delays or costs.
                  </p>
                </li>
                <li className={styles['culture-item']}>
                  <Image src='/assets/images/process-icon-3.png' width={60} height={60} loading="lazy" className={styles['item-icon']} alt="" />
                  <h3 className="h3 title item-title">Performance</h3>
                  <p className="item-text">
                  From the initial concept to the final delivery, we strive for the highest standards of quality.
                  </p>
                </li>
                <li className={styles['culture-item']}>
                  <Image src='/assets/images/process-icon-4.png' width={60} height={60} loading="lazy" className={styles['item-icon']} alt="" />
                  <h3 className="h3 title item-title">Speed</h3>
                  <p className="item-text">
                  We prioritize speed and efficiency in our processes, delivering solutions for our clients' urgent needs.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className={`section ${styles.team}`} aria-labelledby="team-label">
          <div className="container">
            <p className="section-subtitle" id="team-label">Case Studies</p>
            <h2 className="h2 section-title">Our Team</h2>
            
            <div className={styles.team}>
              <ul className={styles['grid-list']}>
                 {team.map((member, index) => (
              <li key={index}>
                <div className={styles['team-card']}>
                  <figure className={`${styles['card-banner']} img-holder`} style={{ '--width': 560, '--height': 350 }}>
                    <Image src={member.image} width={560} height={350} loading="lazy" alt={member.name} className={styles.imgCover} />
                  </figure>
                  <div className={styles['card-content']}>
                    <h2 className={styles['card-title']}>{member.name}</h2>
                    <p className={styles['card-text']}>
                      {member.text}
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
  
  export default AboutUsPage;