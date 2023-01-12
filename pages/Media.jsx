import { Box, Typography } from "@mui/material";
import Image from "next/image";
import MediaSlideShow from "../components/MediaSlideShow";
import { useState, useEffect } from "react";
import styles from "../styles/Media.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Media = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
    const handleWindowResize = () => {
      window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const h1TitleMediaQueries = {
    fontSize: { xs: "2.5rem", md: "4rem" },
  };

  const h2TitleMediaQueries = {
    fontSize: { sm: "2.5rem", md: "4rem" },
  };

  return (
    <>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
            <Box className={styles.imageBox}>
              <img
                className={styles.image}
                src="/galleryImage.png"
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
              <Image
                layout="intrinsic"
                src="/galleryImage.png"
                alt="artist image"
                height={450}
                width={350}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
