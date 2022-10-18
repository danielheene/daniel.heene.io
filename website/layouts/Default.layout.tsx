import { NextSeo } from 'next-seo';
import React, { ComponentProps, ReactNode } from 'react';
import Head from 'next/head';
import { Header } from '@components/Header';

interface DefaultLayoutProps {
  children?: ReactNode | ReactNode[];
  seo?: Partial<ComponentProps<typeof NextSeo>>;
}

export function DefaultLayout({ children, seo }: DefaultLayoutProps) {
  // const seoProps = useSeoProps(seo);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <>
        <Header />
        {children}
      </>
    </>
  );
}
