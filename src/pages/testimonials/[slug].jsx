import contentfulClient from '../../utils/contentful';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../components/css/AboutUs.module.css';

export async function getStaticPaths() {

  const res = await contentfulClient.getEntries({ content_type: 'testimonial' });
  const paths = res.items.map(item => ({
    params: { slug: item.fields.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

  const res = await contentfulClient.getEntries({
    content_type: 'testimonial',
    'fields.slug': params.slug,
  });

  return {
    props: {
      testimonial: res.items[0],
    },
  };
}

export default function Testimonial({ testimonial }) {
  const router = useRouter();
  const { name, testimony, picture } = testimonial.fields;

  return (
    <>
      <Header />
      <section className={`sectionTop ${styles.about}`} id="about" aria-label="about">
          
          <div className={styles.aboutContainer}>
            <div className={`${styles['about-banner']} img-holder`}>
              <Image src={`https:${picture.fields.file.url}`} alt="testimonial" className={styles.imgCover} width={800} height={600}  />
            </div>
  
            <div className={styles['about-content']}>
              <h3 className="h3">{name}</h3>
              <p className="section-text">
              {testimony}
              </p>
              
            </div>
          </div>
        </section>
      
      <Footer />
    </>
  );
}