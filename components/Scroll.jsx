import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Scroll.module.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  return (
    <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
      <button className={styles.scrollBtn}>
        <FontAwesomeIcon
          style={{ fontSize: "1.5rem", color: "black" }}
          icon={faArrowUp}
        ></FontAwesomeIcon>
      </button>
    </Link>
  );
};

export default ScrollToTop;
