import Hero from "../Hero";
import ScrollToTop from "../Scroll";
import AboutUs from "../AboutUs";
import Artist from "../Artist";
import News from "../NewsStartPage";
import Contact from "../contact/Contact";


const Main = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <News />
      <Contact />
      <Artist />
      <ScrollToTop />
    </div>
  );
};

export default Main;
