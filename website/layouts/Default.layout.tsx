import { NextSeo } from 'next-seo';
import React, { ComponentProps, ReactNode } from 'react';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer/Footer';
import { useAppStore } from '@lib/appStore';

interface DefaultLayoutProps {
  children?: ReactNode | ReactNode[];
  seo?: Partial<ComponentProps<typeof NextSeo>>;
}

export function DefaultLayout({ children, seo }: DefaultLayoutProps) {
  // const seoProps = useSeoProps(seo);
  const { metaNavigation, contact } = useAppStore();

  return (
    <>
      {/*<Head></Head>*/}
      <Header />
      <main>{children}</main>
      {!!metaNavigation && !!contact && (
        <Footer contact={contact} metaNavigation={metaNavigation} />
      )}
    </>
  );
}
