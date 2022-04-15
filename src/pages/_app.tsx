import type { AppProps } from 'next/app';
import '../styles/globals.scss';
// @ts-ignore
import { CookiesProvider } from 'react-cookie';
import Head from 'next/head';
// @ts-ignore

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <CookiesProvider>
        {/*<Layout>*/}
        <Component {...pageProps} />
        {/*</Layout>*/}
      </CookiesProvider>
    </>
  );
};

export default MyApp;
