import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import CategoryRecipeList from '@/components/category-recipe-list';
import Container from '@/components/container';
import RecipeList from '@/components/recipe-list';
import { ProfileSkeleton, RecipeListSkeleton } from '@/components/skeleton';
import { useLikedRecipe, useMyRecipe, useProfile, useSavedRecipe } from '@/hooks';
import Layout from '@/components/layout';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const links = [
  { href: 'mine', label: 'My Recipe' },
  { href: 'saved', label: 'Saved Recipe' },
  { href: 'liked', label: 'Liked Recipe' },
];

export default function Profile({ token }) {
  const { data: profile, status: profileStatus } = useProfile(token);
  const searchParams = useSearchParams();
  const category = searchParams.get('category') ?? 'mine';

  const [activeTabIndex, setActiveTabIndex] = useState(links.findIndex(link => link.href === category));
  const [isMobile, setIsMobile] = useState(false);

  const handleLeftClick = () => {
    setActiveTabIndex((prevIndex) => (prevIndex === 0 ? links.length - 1 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setActiveTabIndex((prevIndex) => (prevIndex === links.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Set initial state
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let categoryRecipeList = null;

  if (activeTabIndex === 0) {
    categoryRecipeList = <MineRecipeSection token={token} />;
  } else if (activeTabIndex === 1) {
    categoryRecipeList = <SavedRecipeSection token={token} />;
  } else if (activeTabIndex === 2) {
    categoryRecipeList = <LikedRecipeSection token={token} />;
  }

  return (
    <>
      <Navbar />
      <main>
        <section className='py-40 bg-white'>
          <Container>
            {profileStatus === 'loading' ? (
              <ProfileSkeleton />
            ) : (
              <div className='flex flex-col items-center gap-6 mb-20'>
                <div className='relative'>
                  <div className='w-40 aspect-square rounded-full overflow-hidden'>
                    <img src='/images/profile.png' alt={profile.name} />
                  </div>
                  <button
                    type='button'
                    className='absolute -bottom-4 -right-4 z-10 text-[#EFC81A] flex items-center justify-center w-12 aspect-square rounded-full'
                  >
                    <span className='sr-only'>Edit Profile</span>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10 19H19'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M14.5 2.49998C14.8978 2.10216 15.4374 1.87866 16 1.87866C16.2786 1.87866 16.5544 1.93353 16.8118 2.04014C17.0692 2.14674 17.303 2.303 17.5 2.49998C17.697 2.69697 17.8532 2.93082 17.9598 3.18819C18.0665 3.44556 18.1213 3.72141 18.1213 3.99998C18.1213 4.27856 18.0665 4.55441 17.9598 4.81178C17.8532 5.06915 17.697 5.303 17.5 5.49998L5 18L1 19L2 15L14.5 2.49998Z'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
                <h1 className='text-2xl font-bold'>{profile.name}</h1>
              </div>
            )}

            <nav className='border-b border-b-[#DFDFDF] mb-10'>
              <ul className='flex flex-row items-center justify-center gap-4 p-4 relative'>
                {isMobile && (
                  <li className='absolute left-0'>
                    <button onClick={handleLeftClick} className='md:hidden'>
                      <img src='/images/left.svg' alt='Left' className='w-6 h-6' />
                    </button>
                  </li>
                )}
                {isMobile ? (
                  <li className='group shrink-0'>
                    <Link
                      href={`?category=${links[activeTabIndex].href}`}
                      className={clsx(
                        'inline-flex items-center justify-center w-full px-6 py-4 text-lg text-[#666666]',
                        'group-hover:text-black focus:text-black transition-colors',
                        'underline text-black'
                      )}
                      scroll={true}
                    >
                      {links[activeTabIndex].label}
                    </Link>
                  </li>
                ) : (
                  links.map(({ href, label }, index) => {
                    const currentCategory = activeTabIndex === index;
                    return (
                      <li key={href} className='group shrink-0'>
                        <Link
                          href={`?category=${href}`}
                          className={clsx(
                            'inline-flex items-center justify-center w-full px-6 py-4 text-lg text-[#666666]',
                            'group-hover:text-black focus:text-black transition-colors',
                            currentCategory && 'underline text-black'
                          )}
                          scroll={true}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })
                )}
                {isMobile && (
                  <li className='absolute right-0'>
                    <button onClick={handleRightClick} className='md:hidden'>
                      <img src='/images/right.svg' alt='Right' className='w-6 h-6' />
                    </button>
                  </li>
                )}
              </ul>
            </nav>

            {categoryRecipeList}
          </Container>
        </section>
		<Footer className="mt-1"></Footer>
      </main>
    </>
  );
}

function MineRecipeSection({ token }) {
  const { data: recipes, status } = useMyRecipe(token);
  let recipeList = null;

  if (status === 'loading') {
    recipeList = <RecipeListSkeleton />;
  } else if (status === 'success') {
    if (recipes.length === 0) {
      recipeList = (
        <p>
          Kamu belum membuat resep. Ayo{' '}
          <Link href='/recipes/add' className='underline'>
            tambahkan
          </Link>{' '}
          resepmu.
        </p>
      );
    } else {
      recipeList = <RecipeList recipes={recipes} isMine token={token} />;
    }
  }

  return (
    <section>
      <h2 className='sr-only'>My Recipe</h2>
      {recipeList}
    </section>
  );
}

function SavedRecipeSection({ token }) {
  const { data: recipes, status } = useSavedRecipe(token);
  let recipeList = null;

  if (status === 'loading') {
    recipeList = <RecipeListSkeleton />;
  } else if (status === 'success') {
    if (recipes.length === 0) {
      recipeList = (
        <p>
          Kamu belum menyimpan resep. Ayo{' '}
          <Link href='/' className='underline'>
            simpan
          </Link>{' '}
          resep favoritmu.
        </p>
      );
    } else {
      recipeList = <CategoryRecipeList recipes={recipes} type='saved' />;
    }
  }

  return (
    <section>
      <h2 className='sr-only'>Saved Recipe</h2>
      {recipeList}
    </section>
  );
}

function LikedRecipeSection({ token }) {
  const { data: recipes, status } = useLikedRecipe(token);
  let recipeList = null;

  if (status === 'loading') {
    recipeList = <RecipeListSkeleton />;
  } else if (status === 'success') {
    if (recipes.length === 0) {
      recipeList = (
        <p>
          Kamu belum menyukai resep. Ayo{' '}
          <Link href='/' className='underline'>
            sukai
          </Link>{' '}
          resep favoritmu.
        </p>
      );
    } else {
      recipeList = <CategoryRecipeList recipes={recipes} type='liked' />;
    }
  }

  return (
    <section>
      <h2 className='sr-only'>Liked Recipe</h2>
      {recipeList}
    </section>
  );
}

export async function getServerSideProps({ req }) {
  const token = req.cookies.token || '';
  return {
    props: {
      token,
    },
  };
}
