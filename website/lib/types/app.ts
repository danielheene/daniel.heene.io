import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { FileAsset } from '@sanity/types';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

