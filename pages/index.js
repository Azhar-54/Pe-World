import Navbar from '@/components/navbar';
import ForYouSection from '@/components/sections/for-you-section';
import HeroSection from '@/components/sections/hero-section';
import NewRecipeSection from '@/components/sections/new-recipe-section';
import PopularSection from '@/components/sections/popular-section';
import Footer from '@/components/footer';
import { getRecipes } from '@/lib/recipes';

export default function Home({ recipes, token }) {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* <ForYouSection recipes={recipes.slice(0, 2)} /> */}
        <NewRecipeSection recipe={recipes[0]} />
        <PopularSection recipes={recipes} />
        <Footer className="mt-1"></Footer>
      </main>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const recipes = await getRecipes();
  const token = req.cookies.token || '';
  return {
    props: {
      recipes: recipes.data,
      token,
    },
  };
}
