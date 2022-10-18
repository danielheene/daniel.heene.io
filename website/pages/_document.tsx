import React from 'react';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' type='image/png' href='/favicon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
