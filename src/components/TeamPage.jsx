import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image'; // Import Image component from Next.js

import styles from './css/Team.module.css'; // Import CSS module

const TeamPage = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=5'); // Fetch 3 random users
        const teamData = response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          image: user.picture.large,
          title: 'Lead Developer', // Static title for demonstration
          expertise: 'Web Development, Software Engineering, AI', // Static expertise for demonstration
        }));
        setTeam(teamData);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeam();
  }, []);

  return (
    <section className={`section ${styles.team1}`} aria-labelledby="team-profile-label">
      <div className="container">
        <div className={styles.titleWrapper}>
          <div>
            <p className="section-subtitle" id="team-profile-label">Meet Our Team</p>
            <h2 className="h2 section-title">Team Profile</h2>
          </div>
        </div>
        <ul className={styles.team1List}>
          {team.map((member, index) => (
            <li key={index}>
              <div className={styles.team1Card}>
                <figure className={`${styles.cardBanner} img-holder`} style={{ '--width': 700, '--height': 470 }}>
                  <Image src={member.image} width={600} height={300} alt={member.name} className={styles.imgCover} />
                </figure>
                <div className={styles.cardContent}>
                  <div>
                    <h3 className={`h3 ${styles.cardTitle}`}>{member.name}</h3>
                    <p className={styles.cardText}>{member.title}</p>
                    <p className={styles.cardText}>{member.expertise}</p>
                    <a href={`mailto:${member.email}`} className="btn has-before">{member.email}</a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamPage;
