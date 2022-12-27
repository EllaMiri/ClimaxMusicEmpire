import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "../styles/muiTheme";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
