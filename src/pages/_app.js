// pages/_app.js
import Head from 'next/head';
import Layout from './Layout';
import '@/app/globals.css'
import AOS from 'aos';
import { useEffect } from 'react';

import 'aos/dist/aos.css';
// import '@/styles/global.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 250,
    });
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        />
      </Head>
      <Layout>
              <Component {...pageProps} />
    </Layout>
    </>
    
  );
}