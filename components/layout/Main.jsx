import Hero from "../Hero";
import ScrollToTop from "../Scroll";
import AboutUs from "../AboutUs";
import Artist from "../Artist";
import News from "../NewsStartPage";
import Contact from "../contact/Contact";
import StylingTest from "../StylingTest";

const Main = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <News />
      <Contact />
      <Artist />
      <StylingTest />
      <ScrollToTop />
    </div>
  );
};

export default Main;
