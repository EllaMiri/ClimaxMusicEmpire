import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "../styles/muiTheme";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="cd30cb3f-4113-4558-b925-643aeeca4705"
        data-blockingmode="auto"
        type="text/javascript"
      ></Script>
      <Script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/cd30cb3f-4113-4558-b925-643aeeca4705/cd.js"
        type="text/javascript"
        async
      ></Script>
      {/* <Script
        type="text/javascript"
        charset="UTF-8"
        src="//cdn.cookie-script.com/s/5a074dcc1fc1f55fdb1c4a4216f08caa.js"
      ></Script> */}
      <ThemeProvider theme={CustomTheme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
