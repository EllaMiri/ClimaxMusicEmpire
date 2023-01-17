import Head from "next/head";
import Main from "../components/layout/Main";

export default function Home() {
  return (
    <>
      <Head>
        <title>Climax Music Empire</title>
        <meta name="Climax Music Empire" content="Helps new artists to show of and develop their music and get booked for shows" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/CLIMAXMUSICLOGOv3.png" />
      </Head>
      <Main />
    </>
  );
}
