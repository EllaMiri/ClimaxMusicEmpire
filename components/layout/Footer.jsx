import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/CLIMAXMUSICLOGOv3.png";
import styles from "../../styles/Footer.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ContactLinkFooter from "../contact/ContactLinkFooter";

const Footer = () => {
  const lowerMediaQueries = {
    fontSize: { xs: ".7rem", sm: ".8rem", md: "1rem" }
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
              paddingLeft: "3rem",
              paddingRight: "3rem"
            }}
          />
        </Link>
        <Link href="https://twitter.com/Climaxmusicemp" target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "white", fontSize: "2rem", paddingRight: "3rem" }}
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
        <Link style={{ textDecoration: "none" }} href="/News">
          <Typography variant="p" component="p" sx={lowerMediaQueries} className={styles.links}>
            NEWS
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} href="/Artists">
          <Typography variant="p" component="p" sx={lowerMediaQueries} className={styles.links}>
            ARTISTS
          </Typography>
        </Link>
        <ContactLinkFooter />
        <Link style={{ textDecoration: "none" }} href="/Events">
          <Typography variant="p" component="p" sx={lowerMediaQueries} className={styles.links}>
            EVENTS
          </Typography>
        </Link>
      </Box>
    </footer>
  );
};

export default Footer;
