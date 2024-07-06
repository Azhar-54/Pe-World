import { useEffect } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from '@/components/comment-form';
import Container from '@/components/container';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import CommentSection from '@/components/sections/comment-section';
import { isImageValid } from '@/helpers';
import { getRecipeById } from '@/lib/recipes';
import {
    addLikedId,
    addSavedId,
    fetchRecipes,
    removeLikedId,
    removeSavedId,
    selectLikedId,
    selectSavedId,
} from '@/configs/redux/features/recipes/recipes-slice';

export default function RecipeDetail({ recipe, token }) {
    const { title, description, image, id } = recipe;
    const { push } = useRouter();
    const listOfDescription = description.split('\n');
    const dispatch = useDispatch();
    const saved_id = useSelector(selectSavedId);
    const liked_id = useSelector(selectLikedId);

    useEffect(() => {
        dispatch(fetchRecipes({ token, recipe_id: id }));
    }, [dispatch, token, id]);

    const handleSave = async id => {
        if (!token) {
            push('/login');
        } else {
            try {
                if (saved_id) {
                    dispatch(removeSavedId({ token, saved_id }));
                    alert(`${title} berhasil dihapus`);
                } else {
                    dispatch(addSavedId({ token, recipe_id: id }));
                    alert(`${title} berhasil disimpan`);
                }
            } catch (error) {
                console.log('error handleSave > ', error);
                if (saved_id) {
                    alert(`Gagal menghapus ${title}`);
                } else {
                    alert(`Gagal menyimpan ${title}`);
                }
            }
        }
    };

    const handleLike = async id => {
        if (!token) {
            push('/login');
        } else {
            try {
                if (liked_id) {
                    dispatch(removeLikedId({ token, liked_id }));
                    alert(`Kamu batal menyukai ${title}`);
                } else {
                    dispatch(addLikedId({ token, recipe_id: id }));
                    alert(`Kamu menyukai ${title}`);
                }
            } catch (error) {
                console.log('error handleLike > ', error);
                if (liked_id) {
                    alert(`Gagal batal menyukai ${title}`);
                } else {
                    alert(`Gagal menyukai ${title}`);
                }
            }
        }
    };

    return (
        <main>
            <Navbar />
            <section className='py-40 bg-white'>
                <Container>
                    <div className='mb-16'>
                        <h1 className='text-center text-5xl md:text-7xl  font-bold'>
                            {title}
                        </h1>
                    </div>
                    <div className='relative w-full max-w-6xl aspect-square md:aspect-video mx-auto rounded-2xl overflow-hidden mb-16'>
                        <img
                            src={isImageValid(image) ? image : '/images/sugar-salmon.png'}
                            alt={title}
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute bottom-5 md:bottom-10 right-5 md:right-10'>
                            <div className='flex items-center gap-4'>
                                <button
                                    type='button'
                                    className='group w-12 md:w-14 aspect-square rounded-xl bg-white flex items-center justify-center text-[#ffffff] border border-[#ffffff]'
                                    onClick={() => handleSave(id)}
                                >
                                    <span className='sr-only'>Simpan</span>
                                    <svg
                                        width='24'
                                        height='28'
                                        viewBox='0 0 24 28'
                                        fill='transparent'
                                        xmlns='http://www.w3.org/2000/svg'
                                        aria-hidden
                                        className={clsx(
                                            'group-hover:fill-[#000000] transition-colors w-6',
                                            saved_id && 'fill-[#000000] animate-scale'
                                        )}
                                    >
                                        <path
                                            d='M22.1104 26.9994L11.9993 19.7772L1.88818 26.9994V3.88828C1.88818 3.1221 2.19255 2.3873 2.73432 1.84553C3.27609 1.30375 4.01089 0.99939 4.77707 0.99939H19.2215C19.9877 0.99939 20.7225 1.30375 21.2643 1.84553C21.806 2.3873 22.1104 3.1221 22.1104 3.88828V26.9994Z'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </button>
                                <button
                                    type='button'
                                    className='group w-12 md:w-14 aspect-square rounded-xl bg-white flex items-center justify-center text-[#000000] border border-[#000000]'
                                    onClick={() => handleLike(id)}
                                >
                                    <span className='sr-only'>Suka</span>
                                    <svg
                                        width='36'
                                        height='36'
                                        viewBox='0 0 36 36'
                                        fill='transparent'
                                        xmlns='http://www.w3.org/2000/svg'
                                        aria-hidden
                                        className={clsx(
                                            'group-hover:fill-[#000000] transition-colors w-6',
                                            liked_id && 'fill-[#000000] animate-scale'
                                        )}
                                    >
                                        <path
                                            d='M9.63705 34.9998H4.45482C3.53854 34.9998 2.6598 34.6416 2.01189 34.004C1.36399 33.3663 1 32.5015 1 31.5998V19.6999C1 18.7981 1.36399 17.9334 2.01189 17.2957C2.6598 16.6581 3.53854 16.2999 4.45482 16.2999H9.63705M21.7289 12.8999V6.09997C21.7289 4.74737 21.1829 3.45018 20.2111 2.49375C19.2392 1.53732 17.9211 1 16.5467 1L9.63705 16.2999V34.9998H29.1222C29.9554 35.0091 30.7639 34.7217 31.3988 34.1906C32.0337 33.6595 32.4521 32.9205 32.5771 32.1098L34.9609 16.8099C35.036 16.3226 35.0026 15.8251 34.863 15.3517C34.7234 14.8784 34.4808 14.4406 34.1522 14.0687C33.8236 13.6968 33.4167 13.3996 32.9598 13.1978C32.5029 12.996 32.0068 12.8943 31.5061 12.8999H21.7289Z'
                                            stroke='currentColor'
                                            strokeWidth='2'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <section className='space-y-8 mb-24 w-full max-w-6xl mx-auto'>
                        <h2 className='text-3xl md:text-5xl text-[#3F3A3A]'>Ingredients</h2>
                        <ul className='list-disc list-inside grid gap-2'>
                            {listOfDescription.map((desc, idx) => (
                                <li key={`${desc}-${idx}`} className='text-lg md:text-xl'>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className='mb-14'>
                        <h2 className='sr-only'>Beri komentar pada resep ini</h2>
                        <CommentForm />
                    </section>

                    <CommentSection />
                </Container>
            </section>
			<Footer className="mt-1"></Footer>
        </main>
    );
}

export async function getServerSideProps({ params, req }) {
    const token = req.cookies.token || '';
    if (!token) {
        return {
            redirect: {
                permanent: false,
                destination: '/login',
            },
            props: {},
        };
    }
    const { id } = params;
    const recipe = await getRecipeById(id);

    return {
        props: { recipe, token },
    };
}
