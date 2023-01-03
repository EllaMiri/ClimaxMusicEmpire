import Hero from "../Hero";
import ScrollToTop from "../Scroll";
import AboutUs from "../AboutUs";
import Artist from "../Artist";
import News from "../NewsStartPage";

const Main = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <News />
      <Artist />
      <ScrollToTop />
    </div>
  );
};

export default Main;
