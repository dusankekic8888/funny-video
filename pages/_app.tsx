import { MainLayout } from '@/component/layout';
import { AppPropsWithLayout } from '@/type/layoutPropsType';
import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import { SWRConfig } from 'swr';
import '../styles/globals.css';
import Api from '../actions/config';
import { Provider } from 'react-redux';
import store from 'store';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? MainLayout;
  return (
    <SWRConfig value={{ fetcher: (url) => Api.get(url), shouldRetryOnError: false }}>
      <Provider store={store}>
        <Layout>
          <Head>
            <title>{Component.Title}</title>
          </Head>

          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SWRConfig>
  );
}

export default MyApp;
