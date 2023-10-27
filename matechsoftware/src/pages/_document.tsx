import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

const Document: React.FC = () => {
  return (
    <Html lang="de">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="MaTech Software GbR - Individuelle Web- und App-Entwicklungsdienste"
        />
        <meta property="og:title" content="MaTech Software GbR" />
        <meta
          property="og:description"
          content="MaTech Software - Individuelle Web- und App-Entwicklungsdienste"
        />
        <meta property="og:url" content="https://www.matech-software.de" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MaTech Software GbR" />
        <meta
          name="twitter:description"
          content="MaTech Software - Individuelle Web- und App-Entwicklungsdienste"
        />

        <title>MaTech Software GbR</title>

        <link rel="preconnect" href="//app.eu.usercentrics.eu" />

        <link rel="preconnect" href="//api.eu.usercentrics.eu" />

        <link rel="preconnect" href="//sdp.eu.usercentrics.eu" />

        <link
          rel="preload"
          href="//app.eu.usercentrics.eu/browser-ui/latest/loader.js"
          as="script"
        />

        <link
          rel="preload"
          href="//sdp.eu.usercentrics.eu/latest/uc-block.bundle.js"
          as="script"
        />
        <script
          id="usercentrics-cmp"
          async
          data-eu-mode="true"
          data-settings-id="2G8mEo3LE2x-Os"
          src="https://app.eu.usercentrics.eu/browser-ui/latest/loader.js"
        ></script>
        <script
          type="application/javascript"
          src="https://sdp.eu.usercentrics.eu/latest/uc-block.bundle.js"
        ></script>
      </Head>
      <body>
        <Main/>
        <NextScript/>
        <div id="root"></div>
      </body>
    </Html>

  )
}

export default Document;
