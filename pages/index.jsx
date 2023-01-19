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
      <Main />
    </>
  );
}
