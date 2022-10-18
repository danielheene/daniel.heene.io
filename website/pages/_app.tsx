import React, { useEffect } from 'react';

import '../styles/globals.css';
import '../styles/font-inter.css';
import '../styles/font-inter-tight.css';
import '../styles/font-recursive.css';
import '../styles/font-space-grotesk.css';
import '../styles/font-space-mono.css';
import '../styles/font-syne.css';
import { GradientBackground } from '@components/GradientBackground';
import { Toasty } from '@components/Toasty';
import { useAppStore } from '@lib/appStore';
import { AppPropsWithLayout } from '@lib/types';
import { useIsomorphicLayoutEffect } from '@lib/utils';

export default function App({
  Component,
  pageProps,
  router,
}: AppPropsWithLayout): JSX.Element {
  const getLayout: (page: JSX.Element) => JSX.Element =
    Component.getLayout ?? ((page) => page);
  const { setSettings } = useAppStore();

  useIsomorphicLayoutEffect(() => {
    setSettings(pageProps.settings);
  }, [pageProps]);

  // useEffect(() => {
  //   NProgress.configure({
  //     minimum: 0.3,
  //     easing: 'ease',
  //     speed: 800,
  //     showSpinner: false,
  //   });
  //
  //   router.events.on('routeChangeStart', NProgress.start);
  //   router.events.on('routeChangeComplete', NProgress.done);
  //   router.events.on('routeChangeError', NProgress.done);
  // }, []);

  return getLayout(
    <>
      <Component {...pageProps} />
      <Toasty audioPath='/toasty/toasty.mp3' imagePath='/toasty/toasty.webp' />
      <GradientBackground darkenTop={true} />
    </>
  );
}
