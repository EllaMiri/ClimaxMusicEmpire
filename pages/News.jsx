import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "../styles/AllNews.module.css";
import Link from "next/link";
import { useContext } from "react";
import SEO from "@bradgarropy/next-seo";
import { MobileContext } from "./_app";

const News = () => {
const isMobile = useContext(MobileContext)

  const h1MediaQueries = {
    fontSize: { xs: "2.5rem", sm: "3.75rem" },
  };

  return (
    <Box>
      <SEO description="All new things happening with Climax Music Empire" />
      {isMobile && (
        <>
          <Box className={styles.mobileTitleContainer}>
            <Typography sx={h1MediaQueries} variant="h1" component="h1">
              NEW
            </Typography>
            <Typography className={styles.s} variant="h2" component="h2">
              S
            </Typography>
          </Box>
          <Box className={styles.mobileContainer}>
            <Box className={styles.mobileTextContainer}>
              <Box className={styles.secondTitleBox}>
                <Typography
                  variant="span"
                  component="span"
                  className={styles.secondTitle1}
                >
                  Icekid Ds new song She Don Dey is
                </Typography>
                <Typography
                  variant="span"
                  component="span"
                  className={styles.secondTitle2}
                >
                  out now!
                </Typography>
              </Box>
              <Link
                className={styles.link}
                href="https://distrokid.com/hyperfollow/icekidds1/she-don-dey"
                target="_blank"
              >
                <Typography
                  variant="p"
                  component="p"
                  className={styles.clickToListen}
                >
                  CLICK HERE TO LISTEN
                </Typography>
              </Link>
              <img
                src="./shedondey.png"
                alt="She Don Dey song by Icekid Ds"
                className={styles.image}
              />
              <Typography
                className={styles.mobileNewsDescription2}
                component="p"
                variant="p"
              >
                She Don Dey, made by Icekid Ds is his latest song, bringing
                afrobeat and amapiano vibes with a beat produced by WavvyBeatz.
              </Typography>
            </Box>
          </Box>

          <Box className={styles.mobileContainer}>
            <Box className={styles.secondTitleBox}>
              <Typography
                variant="span"
                component="span"
                className={styles.secondTitle1}
              >
                Freshgee signs with
              </Typography>
              <Typography
                variant="span"
                component="span"
                className={styles.secondTitle2}
              >
                us!
              </Typography>
            </Box>
            <img
              src="./news-freshgee.png"
              alt="Nigerian afrobeat artist Freshgee"
              className={styles.image}
            />
            <Box className={styles.mobileTextContainer}>
              <Typography
                className={styles.mobileNewsDescription}
                component="p"
                variant="p"
              >
                We welcome Freshgee to our label! Freshgee is a young upcoming
                afrobeat artist based in Nigeria. We are very happy to announce
                him as part of our label.
              </Typography>
            </Box>
          </Box>
        </>
      )}
      {!isMobile && (
        <>
          <Box className={styles.titleContainer}>
            <Typography variant="h2" component="h2">
              NEW
            </Typography>
            <Typography className={styles.s} variant="h2" component="h2">
              S
            </Typography>
          </Box>
          <Box className={styles.container}>
            <img
              src="./shedondey.png"
              alt="She Don Dey song by Icekid Ds"
              className={styles.image}
            />
            <Box className={styles.textContainer}>
              <Box className={styles.secondTitleBox}>
                <Typography
                  variant="span"
                  component="span"
                  className={styles.secondTitle1}
                >
                  Icekid Ds new song She Don Dey is
                </Typography>
                <Typography
                  variant="span"
                  component="span"
                  className={styles.secondTitle2}
                >
                  out now!
                </Typography>
              </Box>
              <Link
                className={styles.link}
                href="https://distrokid.com/hyperfollow/icekidds1/she-don-dey"
                target="_blank"
              >
                <Typography
                  variant="p"
                  component="p"
                  className={styles.clickToListen}
                >
                  CLICK HERE TO LISTEN
                </Typography>
              </Link>
              <Typography
                className={styles.newsDescription}
                component="p"
                variant="p"
              >
                She Don Dey, made by Icekid Ds is his latest song, bringing
                afrobeat and amapiano vibes with a beat produced by WavvyBeatz.
              </Typography>
            </Box>
          </Box>

          <Box className={styles.reverseContainer}>
            <img
              src="./news-freshgee.png"
              alt="She Don Dey song by Icekid Ds"
              className={styles.image}
            />
            <Box className={styles.textContainer}>
              <Box className={styles.secondTitleBox}>
                <Typography
                  variant="span"
                  component="span"
                  className={styles.secondTitle1}
                >
                  Freshgee signs with
                </Typography>
                <Typography
                  variant="span"
                  component="span"
                  className={styles.secondTitle2}
                >
                  us!
                </Typography>
              </Box>
              <Typography
                className={styles.newsDescription}
                component="p"
                variant="p"
              >
                We welcome Freshgee to our label! Freshgee is a young upcoming
                afrobeat artist based in Nigeria. We are very happy to announce
                him as part of our label.
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default News;
