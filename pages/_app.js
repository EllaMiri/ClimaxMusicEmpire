import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "../styles/muiTheme";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SEO from "@bradgarropy/next-seo";
import Head from "next/head";
import Script from "next/script";
import { createContext, useEffect, useState } from "react";

export const MobileContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
    const handleWindowResize = () => {
      window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
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
        <MobileContext.Provider value={isMobile}>
          <SEO
            title="Climax Music Empire"
            description="Helps new artists to show of and develop their music and get booked for shows"
            keywords={["climax", "music", "empire", "artist", "record company"]}
            icon="/CLIMAXMUSICLOGOv3.png"
            facebook={{
              url: "https://www.facebook.com/profile.php?id=100085416694420",
              type: "website",
            }}
            twitter={{
              site: "https://twitter.com/Climaxmusicemp",
            }}
          />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </MobileContext.Provider>
      </ThemeProvider>
    </>
  );
}
