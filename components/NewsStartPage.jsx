import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import styles from "../styles/NewsStartPage.module.css";
import { useRouter } from "next/router";
import { useContext } from "react";
import Image from "next/image";
import { MobileContext } from "../pages/_app";

const News = () => {
  const router = useRouter();

  //Context for responivness
  const isMobile = useContext(MobileContext);

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
                New song
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
            <Box className={styles.newsImage}>
              <Image
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                src="/shedondey.png"
                alt="She Don Dey song by Icekid Ds"
                className={styles.newsImage}
              />
            </Box>

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
          <Box className={styles.container}>
            <img
              src="./shedondey.png"
              alt="She Don Dey song by Icekid Ds"
              className={styles.image}
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
                  New song
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
                  id="moreNewsBtn"
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
        </Box>
      )}
    </>
  );
};

export default News;
