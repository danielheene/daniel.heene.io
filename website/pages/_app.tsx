import React from 'react';
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import { get } from 'lodash-es';
import { DefaultSeo } from 'next-seo';

import SEO from '../seo.config';
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

export { reportWebVitals } from 'next-axiom';
export default function App({
  Component,
  pageProps = {},
  router,
}: AppPropsWithLayout): JSX.Element {
  const { appConfig } = pageProps;
  const { asPath } = router;
  const getLayout: (page: JSX.Element) => JSX.Element =
    Component.getLayout ?? ((page) => page);
  const {
    features,
    isRouteChanging,
    meta,
    setAppConfig,
    setRouteChanging,
    setPreviousRoute,
  } = useAppStore();

  useIsomorphicLayoutEffect(() => {
    setAppConfig(appConfig);
  }, [appConfig]);

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
      if (isBrowser) setTimeout(() => window.scrollTo(0, 0), 300);

      setRouteChanging(true);
      setPreviousRoute(asPath);
    });

    router.events.on('routeChangeComplete', (path: string) => {
      setTimeout(() => setRouteChanging(false), pageTransition.speed);
    });

    router.events.on('routeChangeError', () => {
      setRouteChanging(false);
    });
  }, [setRouteChanging, asPath]);

  const { hireMeWidget, easterEggWidget } = features || {};
  const { titleTemplate, description, keywords, tags } = meta;
  const id = get(router, 'asPath', 'home');

  return (
    <>
      <DefaultSeo {...{ ...SEO, titleTemplate, description, keywords, tags }} />

      <LazyMotion features={domAnimation}>
        <AnimatePresence mode='wait'>
          <React.Fragment key={id}>
            {getLayout(<Component key={id} {...pageProps} />)}
            {/*<Component key={id} {...pageProps} />*/}
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
