import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import styles from "../styles/News.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const News = () => {
  const router = useRouter();
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

  return (
    <>
      {isMobile && (
        <Box className={styles.mobileContainer}>
          <Box className={styles.mobileTextContainer}>
            <Box className={styles.titleContainer}>
              <Typography variant="h2" component="h2">
                NEW
              </Typography>
              <Typography className={styles.s} variant="h2" component="h2">
                S
              </Typography>
            </Box>
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
              className={styles.newsImage}
            />
            <Typography
              className={styles.mobileNewsDescription}
              component="p"
              variant="p"
            >
              She Don Dey, made by Icekid Ds is his latest song, bringing
              afrobeat and amapiano vibes with a beat produced by WavvyBeatz.
            </Typography>
            <Box>
              <Button
                onClick={() => router.push("/News")}
                className={styles.mobileMoreNewsBtn}
                variant="contained"
                color="secondary"
              >
                More news
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      {!isMobile && (
        <Box className={styles.container}>
          <img
            src="./shedondey.png"
            alt="She Don Dey song by Icekid Ds"
            className={styles.newsImage}
          />
          <Box className={styles.textContainer}>
            <Box className={styles.titleContainer}>
              <Typography variant="h2" component="h2">
                NEW
              </Typography>
              <Typography className={styles.s} variant="h2" component="h2">
                S
              </Typography>
            </Box>
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
            <Box>
              <Button
                onClick={() => router.push("/News")}
                className={styles.moreNewsBtn}
                variant="contained"
                color="secondary"
              >
                More news
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default News;
