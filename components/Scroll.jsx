import { Link } from "react-scroll";
import styles from "../styles/Scroll.module.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTop = () => {

  // Component for the scroll to top button on the start page, has smooth scrolling and 500ms
  return (
    <Link to="hero" spy={true} smooth={true} duration={500}>
      <button className={styles.scrollBtn} aria-label="scroll up button">
        <i>
          <ArrowUpwardIcon className={styles.arrow} />
        </i>
      </button>
    </Link>
  );
};

export default ScrollToTop;
