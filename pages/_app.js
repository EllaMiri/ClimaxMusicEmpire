import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "../styles/muiTheme";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SEO from '@bradgarropy/next-seo'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <SEO
        title="Climax Music Empire"
        description="Helps new artists to show of and develop their music and get booked for shows"
        keywords={['climax', 'music', 'empire', 'artist', 'record company']}
        icon='/CLIMAXMUSICLOGOv3.png'
        facebook={{
          url: 'https://www.facebook.com/profile.php?id=100085416694420',
          type: 'website'
        }}
        twitter={{
          site: "https://twitter.com/Climaxmusicemp"
        }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
