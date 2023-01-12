import { Button, Typography, Box } from "@mui/material";
import styles from "../styles/Hero.module.css";
import { Link } from "react-scroll";

const Hero = () => {
  const textContentMediaQueries = {
    width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
  };

  const titleBoxMediaQueries = {
    flexDirection: { xs: "column" },
    display: "flex",
  };

  const lastTitleMediaQueries = {
    marginLeft: { xs: "0.5rem", sm: "0.5rem", md: "0.5rem", lg: "1.5rem" },
  };

  const descriptionMediaQueries = {
    alignItems: {
      xs: "center",
      sm: "center",
      md: "flex-end",
      lg: "flex-end",
      xl: "flex-end",
    },
  };

  // const paragraphMediaQueries = {
  //   fontSize: { xs: ".8rem", sm: "1.2rem", md: "1.3rem", lg: "1.5rem" },
  // };

  // const titleMediaQueries = {
  //   fontSize: { xs: "1.6rem", sm: "3rem", md: "4rem", lg: "5rem" },
  // };

  const desktopVideoMediaQueries = {
    display: { xs: "none", sm: "block" },
  };

  const mobileVideoMediaQueries = {
    display: { xs: "block", sm: "none" },
  };

  return (
    <Box id="hero" className={styles.container}>
      <Box sx={desktopVideoMediaQueries}>
        <video autoPlay muted loop className={styles.video}>
          <source src="./rollingWEB.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box sx={mobileVideoMediaQueries}>
        <video autoPlay muted loop className={styles.video}>
          <source src="./heroVideoMobile.mp4" type="video/mp4" />
        </video>
      </Box>
      <Box className={styles.heroText} sx={textContentMediaQueries}>
        <Box className={styles.titleBox} sx={titleBoxMediaQueries}>
          <Box className={styles.headingContainer}>
            <Typography
              className={styles.heading}
              // sx={titleMediaQueries}
              variant="h1"
              component="h1"
            >
              CLIMAX MUSIC
            </Typography>
            <Typography
              className={styles.heading}
              sx={[lastTitleMediaQueries]}
              // titleMediaQueries]}
              variant="h2"
              component="h2"
              style={{ color: "#e2b945" }}
            >
              EMPIRE
            </Typography>
          </Box>
          <Box sx={descriptionMediaQueries} className={styles.description}>
            <Typography
              className={styles.paragraph}
              // sx={paragraphMediaQueries}
              variant="p"
              component="p"
            >
              Swedens aspiring music label
            </Typography>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Button
                className={styles.contactBtn}
                variant="contained"
                color="primary"
              >
                Contact us
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
