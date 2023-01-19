import logo from "../../assets/CLIMAXMUSICLOGOv3.png";
import styles from "../../styles/Footer.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Link as Scroll, scroller } from "react-scroll";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useRouter } from "next/router";

const Footer = () => {
  const lowerMediaQueries = {
    fontSize: { xs: ".7rem", sm: ".8rem", md: "1rem" },
  };

  const router = useRouter();

  // const scrollTarget = (target) =>
  //   scroller.scrollTo(target, {
  //     smooth: true,
  //     duration: 700,
  //     offset: 0,
  //     spy: true,
  //   });

  // const scrollToPage = async (target) => {
  //   if (router.pathname !== "/") {
  //     await router.push("/");
  //   }
  //   scrollTarget(target);
  // };

  function scrollToContact() {
    window.scrollTo({
      top: 1900,
      left: 0,
      behavior: "smooth",
    });
  }

  const scrollToPage = async () => {
    if (router.pathname !== "/") {
      await router.push("/");
    }
    scrollToContact();
  };

  return (
    <footer>
      <Box className={styles.upper}>
        <Link
          aria-label="Climax Music Empire youtube channel"
          href="https://www.youtube.com/channel/UC0wGpK66OgQLjWZJR-NzcSQ"
          target="_blank"
        >
          <YouTubeIcon style={{ color: "white", fontSize: "2.4rem" }} />
        </Link>
        <Link
          aria-label="Climax Music Empire Instagram account"
          href="https://www.instagram.com/climaxmusicempire/"
          target="_blank"
        >
          <InstagramIcon
            style={{
              color: "white",
              fontSize: "2rem",
              marginLeft: "3rem",
              marginRight: "rem",
            }}
          />
        </Link>
        <Link
          aria-label="Climax Music Empire facebook account"
          href="https://www.facebook.com/profile.php?id=100085416694420"
          target="_blank"
        >
          <FacebookIcon
            style={{
              color: "white",
              fontSize: "2rem",
              marginLeft: "3rem",
              marginRight: "3rem",
            }}
          />
        </Link>
        <Link
          aria-label="Climax Music Empire twitter account"
          href="https://twitter.com/Climaxmusicemp"
          target="_blank"
        >
          <TwitterIcon
            style={{
              color: "white",
              fontSize: "2rem",
            }}
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
          <Typography
            id="footerNews"
            variant="p"
            component="p"
            sx={lowerMediaQueries}
            className={styles.links}
          >
            NEWS
          </Typography>
        </Link>
        <Link style={{ textDecoration: "none" }} href="/Artists">
          <Typography
            id="footerArtists"
            variant="p"
            component="p"
            sx={lowerMediaQueries}
            className={styles.links}
          >
            ARTISTS
          </Typography>
        </Link>
        {router.pathname !== "/" && (
          <Typography
            onClick={scrollToPage}
            className={styles.contactLink}
            sx={lowerMediaQueries}
            variant="p"
            component="p"
          >
            CONTACT
          </Typography>
        )}
        {router.pathname === "/" && (
          <Scroll
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
          >
            <Typography
              className={styles.contactLink}
              sx={lowerMediaQueries}
              variant="p"
              component="p"
            >
              CONTACT
            </Typography>
          </Scroll>
        )}
        <Link style={{ textDecoration: "none" }} href="/Events">
          <Typography
            id="footerEvents"
            variant="p"
            component="p"
            sx={lowerMediaQueries}
            className={styles.links}
          >
            EVENTS
          </Typography>
        </Link>
      </Box>
    </footer>
  );
};

export default Footer;
