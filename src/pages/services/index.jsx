import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServicePage from '../../components/ServicePage';
import contentfulClient from '../../utils/contentful';
export async function getStaticProps() {
  async function getTestimonial() {
    try {
      const res = await contentfulClient.getEntries({ content_type: 'testimonial' });
      return res.items;
    } catch (error) {
      console.error(error);
      return []; // Return an empty array on error
    }
  }

  const testimonials = await getTestimonial();
  

  return {
    props: {
      testimonials,
    },
  };
}

export default function Services({ testimonials }) {

  return (
    <>
      <Header />
      <ServicePage testimonials={testimonials} />
      <Footer />
    </>
  );
}

