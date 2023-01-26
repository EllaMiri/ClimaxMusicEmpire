import Hero from "../Hero";
import ScrollToTop from "../Scroll";
import AboutUs from "../AboutUs";
import Artist from "../Artist";
import News from "../NewsStartPage";
import Contact from "../contact/Contact";
import EventsStartPage from "../EventsStartPage";

const Main = () => {
  // Component that renders the other components to the start page
  return (
    <div>
      <Hero />
      <AboutUs />
      <EventsStartPage />
      <Contact />
      <News />
      <Artist />
      <ScrollToTop />
    </div>
  );
};

export default Main;
