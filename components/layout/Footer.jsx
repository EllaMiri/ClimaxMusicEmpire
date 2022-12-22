import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/CLIMAXMUSICLOGOv3.png";
import styles from "../../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className={styles.upper}>
        <Link
          href="https://www.instagram.com/climaxmusicempire/"
          target="_blank"
        >
          <FontAwesomeIcon
            style={{ color: "white", fontSize: "2rem" }}
            icon={faInstagram}
          />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=100085416694420"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            style={{
              color: "white",
              fontSize: "2rem",
              paddingLeft: "5rem",
              paddingRight: "5rem",
            }}
          />
        </Link>
        {/* INSERT LINK TO YOUTUBE HERE */}
        <FontAwesomeIcon
          icon={faYoutube}
          style={{ color: "white", fontSize: "2rem" }}
        />
      </div>
      <div className={styles.middle}>
        <Image src={logo} alt="Climax Music Empire" width={50} />
      </div>
      <div className={styles.lower}>
        <Link href="/News">
          <span className={styles.links}>NEWS</span>
        </Link>
        <Link href="/Artists">
          <span className={styles.links}>ARTISTS</span>
        </Link>
        {/* INSERT REACT SCROLL LINK HERE */}
        <span className={styles.links}>CONTACT US</span>
        <Link href="/Events">
          <span className={styles.links}>EVENTS</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
