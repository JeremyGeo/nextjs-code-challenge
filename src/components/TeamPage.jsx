
import Image from 'next/image';
import styles from './css/Team.module.css';
import useFetchTeam from '../utils/fetchteam';
import SkeletonLoader from './SkeletonLoader';

const TeamPage = () => {
  
    const team = useFetchTeam();

  return (
    <section className={`sectionTop ${styles.team1}`} aria-labelledby="team-profile-label">
      <div className="container">
        <div>
          <div>
            <h2 className="h2 section-title">Our Team Profile</h2>
          </div>
        </div>
        <ul className={styles.team1List}>
          {team.length === 0
            ? Array.from({ length: 5 }).map((_, index) => <SkeletonLoader key={index} />)
            : team.map((member, index) => (
                <li key={index}>
                  <div className={styles.team1Card}>
                    <figure className={`${styles.cardBanner} img-holder`} style={{ '--width': 700, '--height': 470 }}>
                      <Image
                        src={member.image}
                        width={700}
                        height={470}
                        alt={member.name}
                        className={styles.imgCover}
                        placeholder="blur"
                        blurDataURL={member.image}
                      />
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
