import { Link } from "react-scroll";
import styles from "../styles/Scroll.module.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTop = () => {
  return (
    <Link to="hero" spy={true} smooth={true} duration={500}>
      <button className={styles.scrollBtn} aria-label="scroll up button">
        <i>
          <ArrowUpwardIcon style={{ fontSize: "3rem", color: "black" }} />
        </i>
      </button>
    </Link>
  );
};

export default ScrollToTop;
