import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/CLIMAXMUSICLOGOv3.png";
import styles from "../../styles/Footer.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const lowerMediaQueries = {
    fontSize: { xs: ".7rem", sm: ".8rem", md: "1rem" },
  };
  return (
    <footer>
      <Box className={styles.upper}>
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
        <Link
          href="https://www.youtube.com/channel/UC0wGpK66OgQLjWZJR-NzcSQ"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: "white", fontSize: "2rem" }}
          />
        </Link>
      </Box>
      <Box className={styles.middle}>
        <Link href="/">
          <Image src={logo} alt="Climax Music Empire" width={50} />
        </Link>
      </Box>
      <Box className={styles.lower}>
        <Link href="/News">
          <Typography sx={lowerMediaQueries} className={styles.links}>
            NEWS
          </Typography>
        </Link>
        <Link href="/Artists">
          <Typography sx={lowerMediaQueries} className={styles.links}>
            ARTISTS
          </Typography>
        </Link>
        {/* INSERT REACT SCROLL LINK HERE */}
        <Typography sx={lowerMediaQueries} className={styles.links}>
          CONTACT US
        </Typography>
        <Link href="/Events">
          <Typography sx={lowerMediaQueries} className={styles.links}>
            EVENTS
          </Typography>
        </Link>
      </Box>
    </footer>
  );
};

export default Footer;
