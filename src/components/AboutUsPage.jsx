// src/pages/about/index.jsx
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
        <section className={`section ${styles.about}`} id="about" aria-label="about">
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
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
  
              <h3 className="h3">Our Success</h3>
              <ul className={styles['about-list']}>
                <li className={styles['about-item']}>
                  <p className="section-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </li>
                <li className={styles['about-item']}>
                  <p className="section-text">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </p>
                </li>
                <li className={styles['about-item']}>
                  <p className="section-text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.
                  </p>
                </li>
              </ul>
  
              <h3 className="h3">Our Mission</h3>
              <p className="section-text">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in.
              </p>
            </div>
          </div>
        </section>
  
        {/* Our Culture Section */}
        <section className={`section ${styles.culture}`} aria-labelledby="culture-label">
          <div className="container">
            <h2 className="h2 title section-title">Our Culture</h2>
            <p className="section-text">
              Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.
            </p>
  
            <div className={styles.wrapper}>
              <figure className={styles['culture-banner']}>
                <Image src="/assets/images/process-banner.png" alt="culture banner" className="w-100" width={800} height={800} />
              </figure>
  
              <ul className={styles['grid-list']}>
                <li className={styles['culture-item']}>
                  <Image src='/assets/images/process-icon-1.png' width={60} height={60} loading="lazy" className={styles['item-icon']} alt="" />
                  <h3 className="h3 title item-title">Ideation</h3>
                  <p className="item-text">
                    Use this section to describe your company and the products you offer. You could share your company’s
                  </p>
                </li>
                <li className={styles['culture-item']}>
                  <Image src='/assets/images/process-icon-2.png' width={60} height={60} loading="lazy" className={styles['item-icon']} alt="" />
                  <h3 className="h3 title item-title">Budget</h3>
                  <p className="item-text">
                    Use this section to describe your company and the products you offer. You could share your company’s
                  </p>
                </li>
                <li className={styles['culture-item']}>
                  <Image src='/assets/images/process-icon-3.png' width={60} height={60} loading="lazy" className={styles['item-icon']} alt="" />
                  <h3 className="h3 title item-title">Performance</h3>
                  <p className="item-text">
                    Use this section to describe your company and the products you offer. You could share your company’s
                  </p>
                </li>
                <li className={styles['culture-item']}>
                  <Image src='/assets/images/process-icon-4.png' width={60} height={60} loading="lazy" className={styles['item-icon']} alt="" />
                  <h3 className="h3 title item-title">Speed</h3>
                  <p className="item-text">
                    Use this section to describe your company and the products you offer. You could share your company’s
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