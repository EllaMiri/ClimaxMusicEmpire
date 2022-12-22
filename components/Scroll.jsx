import { Link } from "react-scroll";
import styles from "../styles/Scroll.module.css";

const ScrollToTop = () => {
  return (
    <div className={styles.scrollContainer}>
      <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
        <img src="./scroll.png" alt="scrollIcon" />
      </Link>
    </div>
  );
};

export default ScrollToTop;
