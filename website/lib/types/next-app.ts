import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { AppConfigData } from './sanity-queries';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type AppConfig = Omit<AppConfigData, '_type' | '_id'>
