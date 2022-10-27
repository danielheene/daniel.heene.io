import { NextPageWithLayout } from '@lib/types';
import { useRouter } from 'next/router';
import { useAppStore } from '@lib/appStore';
import clsx from 'clsx';
import { Typography } from '@components/Typography';
import { Icon } from '@iconify/react';
import { PortableText } from '@components/PortableText';
import React, { ReactElement } from 'react';
import { DefaultLayout } from '@layouts/Default.layout';
import { GetStaticProps } from 'next';
import Sanity, { appConfigQuery, imprintQuery } from '@lib/sanity';
import { TypedObject } from '@sanity/types';

const ImprintPage: NextPageWithLayout = (props, context) => {
  const router = useRouter();
  const { title, body } = props as {
    title: string;
    body: TypedObject | TypedObject[];
  };
  const { previousRoute } = useAppStore();

  return (
    <>
      <article
        className={clsx(['container', 'grid', 'grid-cols-12', 'gap-y-12'])}
      >
        <div className={clsx(['col-start-2', 'col-span-10'])}>
          <Typography as='h1' variant='section-title' className='text-center'>
            {title}
          </Typography>
        </div>

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
      </article>
    </>
  );
};

ImprintPage.getLayout = (page: ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);

export const getStaticProps: GetStaticProps<{
  preview: boolean;
}> = async ({ preview = false }) => {
  try {
    const SanityClient = Sanity.getClient(preview);
    const appConfig = await SanityClient.fetch(appConfigQuery);
    const data = await SanityClient.fetch(imprintQuery);

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

export default ImprintPage;
