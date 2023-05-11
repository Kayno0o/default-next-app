import '../styles/globals.css';
import React, { ReactElement, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import ToastManager from '../components/base/ToastManager';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function MyApp({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageWithLayout;
}) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return <ToastManager>{getLayout(<Component {...pageProps} />)}</ToastManager>;
}

export default MyApp;
