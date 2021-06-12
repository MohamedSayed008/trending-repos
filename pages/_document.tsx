import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { DocumentContext, DocumentInitialProps } from 'next/dist/next-server/lib/utils';

const MyDocument = () => {
  return (
    <Html>
      <Head>
        <meta name='description' content='Coin Mena Task' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.7306cec3.png' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx);

  return initialProps;
};

MyDocument.renderDocument = Document.renderDocument;

export default MyDocument;
