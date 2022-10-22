import React, { ReactElement } from 'react';

import { DefaultLayout } from '@layouts/Default.layout';
import { NextPageWithLayout } from '@lib/types';
import { PortableText } from '@components/PortableText';
import { PortableTextBlock } from '@portabletext/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import Sanity, {
  appConfigQuery,
  projectListQuery,
  projectQuery,
} from '@lib/sanity';
import { fetchAppConfig, resolvePathFromSlug, Routes } from '@lib/utils';
import clsx from 'clsx';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

interface ProjectData {
  body: PortableTextBlock | PortableTextBlock[];
}

interface Props extends ProjectData {}

const ProjectPage: NextPageWithLayout<Props> = (props, context) => {
  return (
    <>
      {/*<div className={clsx(['container', 'grid', 'grid-cols-12'])}>*/}
      {/*  <main className={clsx(['col-start-2', 'col-span-7'])}>*/}
      {/*  </main>*/}
      {/*  <aside className={clsx(['col-span-3'])}>a</aside>*/}
      {/*</div>*/}

      <div className='container !pt-0'>
        <div className='max-w-screen-md mx-auto '>
          <div className='text-center'>
            {/*<CategoryLabel categories={post.categories} />*/}
          </div>

          <h1 className='mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white'>
            {/*{post.title}*/}
          </h1>

          <div className='flex justify-center mt-3 space-x-3 text-gray-500 '>
            <div className='flex items-center gap-3'>
              <div className='relative flex-shrink-0 w-10 h-10'>
                {/*{AuthorimageProps && (*/}
                {/*  <Image*/}
                {/*    src={AuthorimageProps.src}*/}
                {/*    blurDataURL={AuthorimageProps.blurDataURL}*/}
                {/*    loader={AuthorimageProps.loader}*/}
                {/*    objectFit='cover'*/}
                {/*    alt={post?.author?.name}*/}
                {/*    placeholder='blur'*/}
                {/*    layout='fill'*/}
                {/*    className='rounded-full'*/}
                {/*  />*/}
                {/*)}*/}
              </div>
              <div>
                <p className='text-gray-800 dark:text-gray-400'>
                  {/*{post.author.name}*/}
                </p>
                <div className='flex items-center space-x-2 text-sm'>
                  {/*<time*/}
                  {/*  className='text-gray-500 dark:text-gray-400'*/}
                  {/*  dateTime={post?.publishedAt || post._createdAt}*/}
                  {/*>*/}
                  {/*  {format(*/}
                  {/*    parseISO(post?.publishedAt || post._createdAt),*/}
                  {/*    'MMMM dd, yyyy'*/}
                  {/*  )}*/}
                  {/*</time>*/}
                  {/*<span>· {post.estReadingTime || '5'} min read</span>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video'>
        {/*{imageProps && (*/}
        {/*  <Image*/}
        {/*    src={imageProps.src}*/}
        {/*    loader={imageProps.loader}*/}
        {/*    blurDataURL={imageProps.blurDataURL}*/}
        {/*    alt={post.mainImage?.alt || 'Thumbnail'}*/}
        {/*    layout='fill'*/}
        {/*    loading='eager'*/}
        {/*    objectFit='cover'*/}
        {/*  />*/}
        {/*)}*/}
      </div>

      {/* {post?.mainImage && <MainImage image={post.mainImage} />} */}
      <div className='container'>
        <article className='max-w-screen-md mx-auto mx-auto my-3 '>
          <PortableText value={props.body} />
          <div className='flex justify-center mt-7 mb-7'>
            <Link href='/'>
              <a className='px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 '>
                ← View all posts
              </a>
            </Link>
          </div>
          {/*{post.author && <AuthorCard author={post.author} />}*/}
        </article>
      </div>
    </>
  );
};

ProjectPage.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await Sanity.getClient().fetch(projectListQuery);
  const paths = projects.map((p) => resolvePathFromSlug(p.slug, p._type));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  params,
}) => {
  const { slug } = params;
  const SanityClient = Sanity.getClient(preview);
  const appConfig = await SanityClient.fetch(appConfigQuery);
  const data = await SanityClient.fetch(projectQuery, { slug });

  // if (!data || !settings || !navigations) {
  //   return { notFound: true };
  // }

  return {
    props: {
      ...data,
      appConfig,
    },
    revalidate: process.env.NODE_ENV === 'production' ? 300 : 5,
  };
};

export default ProjectPage;
