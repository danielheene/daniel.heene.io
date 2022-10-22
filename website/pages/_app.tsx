import React from 'react';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';

export { reportWebVitals } from 'next-axiom';
import { get } from 'lodash-es';

import { useAppStore } from '@lib/appStore';
import { AppPropsWithLayout } from '@lib/types';
import { isBrowser } from '@lib/utils';
import { useIsomorphicLayoutEffect } from '@lib/hooks';
import { pageTransition } from '@lib/transitions';
import { Toasty } from '@components/Toasty';
import { HireMeMemoji } from '@components/HireMeMemoji';
import { GradientBackground } from '@components/GradientBackground';

import '../styles/globals.css';
import '../styles/font-inter.css';
import '../styles/font-jetbrains-mono.css';
import '../styles/font-syne.css';
import { DefaultSeo } from 'next-seo';
import { MetaTag } from 'next-seo/lib/types';

export default function App({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout): JSX.Element {
  const getLayout: (page: JSX.Element) => JSX.Element =
    Component.getLayout ?? ((page) => page);
  const {
    features,
    isRouteChanging,
    meta,
    setAppConfig,
    setRouteChanging,
    setAnimateBackground,
  } = useAppStore();

  useIsomorphicLayoutEffect(() => {
    if ('appConfig' in pageProps) {
      setAppConfig(pageProps.appConfig);
    }
  }, [pageProps.appConfig]);

  /**
   * add class for loading state to dom
   */
  React.useEffect(() => {
    document.documentElement.classList.toggle('is-loading', isRouteChanging);
  }, [isRouteChanging]);

  /**
   * bind router events
   */
  React.useEffect(() => {
    router.events.on('routeChangeStart', (_, { shallow }) => {
      if (shallow) return;

      if (isBrowser) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
      setRouteChanging(true);
    });

    router.events.on('routeChangeComplete', (path: string) => {
      setTimeout(() => setRouteChanging(false), pageTransition.speed);
      setAnimateBackground(path === '/');
    });

    router.events.on('routeChangeError', () => {
      setRouteChanging(false);
    });
  }, [setRouteChanging]);

  const { hireMeWidget, easterEggWidget } = features || {};
  const { titleTemplate, description, keywords, tags } = meta;
  const id = get(router, 'asPath', 'home');

  return (
    <>
      {/*<Head>*/}
      {/*  <meta name='viewport' content='width=device-width, initial-scale=1' />*/}
      {/*</Head>*/}
      <DefaultSeo
        titleTemplate={titleTemplate}
        description={description}
        additionalMetaTags={
          tags.map(({ type, value, content }) => ({
            [type]: value,
            content,
          })) as unknown as MetaTag[]
        }
      />

      <LazyMotion features={domAnimation}>
        <AnimatePresence mode='wait'>
          <React.Fragment key={id}>
            {getLayout(<Component key={id} {...pageProps} />)}
          </React.Fragment>
        </AnimatePresence>
      </LazyMotion>

      {easterEggWidget && (
        <Toasty
          audioPath='/toasty/toasty.mp3'
          imagePath='/toasty/toasty.webp'
        />
      )}
      {hireMeWidget && <HireMeMemoji />}
      <GradientBackground darkenTop={true} />
    </>
  );
}
