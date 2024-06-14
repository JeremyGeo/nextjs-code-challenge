import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServicePage from '../../components/ServicePage';
import { createClient } from 'contentful';
export async function getStaticProps() {
  async function getRecipes() {
    try {
      const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      });

      const res = await client.getEntries({ content_type: 'recipe' });
      return res.items;
    } catch (error) {
      console.error(error);
      return []; // Return an empty array on error
    }
  }

  const recipes = await getRecipes();

  return {
    props: {
      recipes,
    },
  };
}

export default function Services({ recipes }) {

  return (
    <>
      <Header />
      {recipes.map(recipe =><ServicePage key={recipe.sys.id} recipe={recipe}/>)}
      <Footer />
    </>
  );
}

