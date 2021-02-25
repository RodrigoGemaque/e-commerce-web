import React from 'react';
import { AppProps }   from 'next/app';

import Head from 'next/head';

import '../styles/globals.css'


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
  <>
    <Head>
      <title>OneBitGames</title>
      <meta name="Viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps}/>
  </>
  )
  
}


// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default MyApp
