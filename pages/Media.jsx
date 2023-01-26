import { Box, Typography } from "@mui/material";
import Image from "next/image";
import MediaSlideShow from "../components/MediaSlideShow";
import { useState, useEffect, useContext } from "react";
import styles from "../styles/Media.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SEO from "@bradgarropy/next-seo";
import { MobileContext } from "./_app";

const Media = () => {
  //Context for the responsivness
  const isMobile = useContext(MobileContext);

  //Media queries
  const h1TitleMediaQueries = {
    fontSize: { xs: "2.5rem", sm: "3.75rem", md: "4rem" },
  };

  const h2TitleMediaQueries = {
    fontSize: { sm: "2.5rem", sm: "3.75rem", md: "4rem" },
  };

  return (
    <>
      <SEO
        title="Media"
        description="All images on the artists within Climax Music Empire"
      />
      {!isMobile && (
        <Box className={styles.mediaContainer}>
          <Box className={styles.titleBox}>
            <Box className={styles.mediaBox}>
              <Typography component="h1" variant="h1" sx={h1TitleMediaQueries}>
                MEDI
              </Typography>
              <Typography
                className={styles.h2Title}
                sx={h2TitleMediaQueries}
                component="h2"
                variant="h2"
              >
                A
              </Typography>
            </Box>
          </Box>
          <Box className={styles.contentBox}>
            <Box className={styles.textBox}>
              <Typography className={styles.text} variant="p" component="p">
                Each of our artists have a different and unique style worth
                showing. We always make sure to collect images of our concerts
                and artists so that the fans can get a better visualisation of
                us as a company, our artists and what we do. Scroll down to view
                a slideshow with images of our artists and shows.
              </Typography>
            </Box>
            <Box className={styles.imageBox}>
              <img
                className={styles.image}
                src="/MediaImage.png"
                alt="artist image"
              />
            </Box>
          </Box>

          <Box className={styles.iconBox}>
            <KeyboardArrowDownIcon className={styles.icon} />
          </Box>
          <MediaSlideShow />
        </Box>
      )}

      {isMobile && (
        <Box className={styles.mediaContainer}>
          <Box className={styles.mobileTitleBox}>
            <Box className={styles.h1TitleMobile}>
              <Typography component="h1" variant="h1" sx={h1TitleMediaQueries}>
                MEDI
              </Typography>
              <Typography
                className={styles.h2Title}
                sx={h2TitleMediaQueries}
                component="h2"
                variant="h2"
              >
                A
              </Typography>
            </Box>
            <Box className={styles.imageBoxMobile}>
              <img
                src="/MediaImage.png"
                alt="artist image"
                className={styles.image}
              />
            </Box>
          </Box>
          <Box className={styles.contentBoxMobile}>
            <Box className={styles.textBoxMobile}>
              <Typography
                className={styles.textMobile}
                variant="p"
                component="p"
              >
                Each of our artists have a different and unique style worth
                showing. We always make sure to collect images of our concerts
                and artists so that the fans can get a better visualisation of
                us as a company, our artists and what we do. Scroll down to view
                a slideshow with images of our artists and shows.
              </Typography>
            </Box>
          </Box>

          <Box className={styles.iconBox}>
            <KeyboardArrowDownIcon className={styles.icon} />
          </Box>
          <MediaSlideShow />
        </Box>
      )}
    </>
  );
};

export default Media;
