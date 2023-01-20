import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="cd30cb3f-4113-4558-b925-643aeeca4705"
          data-blockingmode="auto"
          type="text/javascript"
        ></Script> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Noto+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* <Script
          type="text/javascript"
          charset="UTF-8"
          src="//cdn.cookie-script.com/s/5a074dcc1fc1f55fdb1c4a4216f08caa.js"
        ></Script> */}
      </body>
    </Html>
  );
}
