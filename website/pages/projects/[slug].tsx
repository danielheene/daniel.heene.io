import React, { ReactElement, useMemo } from 'react';

import { DefaultLayout } from '@layouts/Default.layout';
import { NextPageWithLayout, ProjectProjectData } from '@lib/types';
import { PortableText } from '@components/PortableText';
import { GetStaticPaths, GetStaticProps } from 'next';
import Sanity, {
  appConfigQuery,
  projectUrlsQuery,
  projectQuery,
} from '@lib/sanity';
import Link from 'next/link';
import { Image } from '@components/Image';
import { Typography } from '@components/Typography';
import clsx from 'clsx';
import { useAppStore } from '@lib/appStore';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

interface Props extends ProjectProjectData {}

const ProjectPage: NextPageWithLayout<Props> = (props, context) => {
  const router = useRouter();
  const { title, subtitle, poster, category, body } = props;
  const { previousRoute } = useAppStore();

  return (
    <>
      <article
        className={clsx(['container', 'grid', 'grid-cols-12', 'gap-y-12'])}
      >
        {/*  <main className={clsx(['col-start-2', 'col-span-7'])}>*/}
        {/*  </main>*/}
        {/*  <aside className={clsx(['col-span-3'])}>a</aside>*/}
        {/*</div>*/}

        <div className={clsx(['col-start-2', 'col-span-10'])}>
          <Typography as='h1' variant='section-title' className='text-center'>
            {title}
          </Typography>
          <Typography as='h2' variant='section-subtitle'>
            {subtitle}
          </Typography>
        </div>

        {poster && (
          <figure
            className={clsx([
              'col-span-full',
              'aspect-w-16',
              'aspect-h-7',
              'rounded-lg',
              'overflow-hidden',
              'shadow-2xl',
              'border',
              'border-zinc-900/40',
            ])}
          >
            <Image image={poster} fill />
          </figure>
        )}

        <nav
          className={clsx([
            'col-start-3',
            'col-span-8',
            'flex',
            'flex-col',
            'md:flex-row',
            'justify-end',
          ])}
        >
          <button
            className={clsx([
              'text-2xl',
              'flex',
              'flex-row',
              'gap-1',
              'font-mono',
              'uppercase',
              'items-center',
              'font-semibold',
              'mr-auto',
            ])}
            onClick={() => (previousRoute ? router.back() : router.push('/'))}
          >
            <Icon className={'text-3xl'} icon='mdi:arrow-left' />
            Go Back
          </button>
          <div></div>
        </nav>

        {body && (
          <div
            className={clsx([
              'col-start-3',
              'col-span-8',
              'rounded-lg',
              'bg-white/10',
              'backdrop-blur-2xl',
              'p-12',
            ])}
          >
            <PortableText value={body} />
          </div>
        )}

        {/*<div className='container !pt-0'>*/}
        {/*  <div className='max-w-screen-md mx-auto '>*/}
        {/*    <div className='text-center'>*/}
        {/*      /!*<CategoryLabel categories={post.categories} />*!/*/}
        {/*    </div>*/}

        {/*    <div className='flex justify-center mt-3 space-x-3 text-gray-500 '>*/}
        {/*      <div className='flex items-center gap-3'>*/}
        {/*        <div className='relative flex-shrink-0 w-10 h-10'>*/}
        {/*          /!*{AuthorimageProps && (*!/*/}
        {/*          /!*  <Image*!/*/}
        {/*          /!*    src={AuthorimageProps.src}*!/*/}
        {/*          /!*    blurDataURL={AuthorimageProps.blurDataURL}*!/*/}
        {/*          /!*    loader={AuthorimageProps.loader}*!/*/}
        {/*          /!*    objectFit='cover'*!/*/}
        {/*          /!*    alt={post?.author?.name}*!/*/}
        {/*          /!*    placeholder='blur'*!/*/}
        {/*          /!*    layout='fill'*!/*/}
        {/*          /!*    className='rounded-full'*!/*/}
        {/*          /!*  />*!/*/}
        {/*          /!*)}*!/*/}
        {/*        </div>*/}
        {/*        <div>*/}
        {/*          <p className='text-gray-800 dark:text-gray-400'>*/}
        {/*            /!*{post.author.name}*!/*/}
        {/*          </p>*/}
        {/*          <div className='flex items-center space-x-2 text-sm'>*/}
        {/*            /!*<time*!/*/}
        {/*            /!*  className='text-gray-500 dark:text-gray-400'*!/*/}
        {/*            /!*  dateTime={post?.publishedAt || post._createdAt}*!/*/}
        {/*            /!*>*!/*/}
        {/*            /!*  {format(*!/*/}
        {/*            /!*    parseISO(post?.publishedAt || post._createdAt),*!/*/}
        {/*            /!*    'MMMM dd, yyyy'*!/*/}
        {/*            /!*  )}*!/*/}
        {/*            /!*</time>*!/*/}
        {/*            /!*<span>· {post.estReadingTime || '5'} min read</span>*!/*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className='relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video'>*/}
        {/*  <Image*/}
        {/*    src={imageProps.src}*/}
        {/*    loader={imageProps.loader}*/}
        {/*    blurDataURL={imageProps.blurDataURL}*/}
        {/*    alt={mainImage?.alt || 'Thumbnail'}*/}
        {/*    layout='fill'*/}
        {/*    loading='eager'*/}
        {/*    objectFit='cover'*/}
        {/*  />*/}
        {/*</div>*/}

        {/* {post?.mainImage && <MainImage image={post.mainImage} />} */}
        {/*<div className='container'>*/}
        {/*  <article className='max-w-screen-md mx-auto mx-auto my-3 '>*/}
        {/*    <div className='flex justify-center mt-7 mb-7'>*/}
        {/*      <Link href='/'>*/}
        {/*        <a className='px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 '>*/}
        {/*          ← View all posts*/}
        {/*        </a>*/}
        {/*      </Link>*/}
        {/*    </div>*/}
        {/*    /!*{post.author && <AuthorCard author={post.author} />}*!/*/}
        {/*  </article>*/}
        {/*</div>*/}
      </article>
    </>
  );
};

ProjectPage.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await Sanity.getClient()
    .fetch(projectUrlsQuery)
    .then((projects) => projects.map((p) => p.urlPath));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<{
  preview: boolean;
  params: { slug: string };
}> = async ({ preview = false, params }) => {
  try {
    const { slug } = params;
    const SanityClient = Sanity.getClient(preview);
    const appConfig = await SanityClient.fetch(appConfigQuery);
    const data = await SanityClient.fetch(projectQuery, { slug });

    return {
      props: {
        ...data,
        appConfig,
      },
      revalidate: 120,
    };
  } catch (error) {
    return {
      notFound: true,
      props: null,
    };
  }
};

export default ProjectPage;
