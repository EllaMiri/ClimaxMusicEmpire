import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import styles from "../styles/News.module.css";

const News = () => {
  return (
    <Box
      className={styles.container}
      //   style={{
      //     display: "flex",
      //     justifyContent: "space-around",
      //     marginTop: "5rem",
      //     marginLeft: "3rem",
      //   }}
    >
      <img
        src="./shedondey.png"
        alt=""
        className={styles.newsImage}
        // style={{ width: "50%", height: "auto" }}
      />
      <Box
        className={styles.textContainer}
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        // }}
      >
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
          She Don Dey, made by Icekid Ds is his latest song, bringing afrobeat
          and amapiano vibes with a beat produced by WavvyBeatz.
        </Typography>

        {/* <Link
          style={{ textDecoration: "none" }}
          href="https://distrokid.com/hyperfollow/icekidds1/she-don-dey"
          target="_blank"
        >
          <Typography
            variant="p"
            component="p"
            style={{
              fontFamily: "Montserrat",
              fontSize: "1rem",
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            CLICK HERE TO LISTEN
          </Typography>
        </Link> */}
        <Box>
          <Button
            className={styles.moreNewsBtn}
            variant="contained"
            color="secondary"
          >
            More news
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default News;
