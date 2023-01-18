import Head from "next/head";
import Main from "../components/layout/Main";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        type="text/javascript"
        charset="UTF-8"
        src="//cdn.cookie-script.com/s/5a074dcc1fc1f55fdb1c4a4216f08caa.js"
      ></Script>
      <Head>
        <title>Climax Music Empire</title>
        <meta
          name="description"
          content="Helps new artists to show of and develop their music and get booked for shows"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e2b945" />
        <link rel="icon" href="/CLIMAXMUSICLOGOv3.png" />
      </Head>

      <Main />
    </>
  );
}
