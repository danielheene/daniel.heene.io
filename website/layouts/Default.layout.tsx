import React, { ReactNode } from 'react';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer/Footer';
import { useAppStore } from '@lib/appStore';
import { NextSeo } from 'next-seo';

interface DefaultLayoutProps {
  children?: ReactNode | ReactNode[];
}

export function DefaultLayout({ children, ...props }: DefaultLayoutProps) {
  const { metaNavigation, contact, meta } = useAppStore();

  return (
    <div id='layout'>
      <Header />
      {/*<NextSeo*/}
      {/*  title={props.title}*/}
      {/*  titleTemplate={appConfig.titleTemplate}*/}
      {/*  description={pageProps.description}*/}
      {/*/>*/}
      <main>{children}</main>
      <Footer contact={contact} metaNavigation={metaNavigation} />
    </div>
  );
}
