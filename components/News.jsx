import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import styles from "../styles/News.module.css";

const News = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "5rem",
        marginLeft: "3rem",
      }}
    >
      <img
        src="./shedondey.png"
        alt=""
        style={{ width: "50%", height: "auto" }}
      />
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box style={{ display: "flex" }}>
          <Typography variant="h2" component="h2">
            NEW
          </Typography>
          <Typography style={{ color: "#e2b945" }} variant="h2" component="h2">
            S
          </Typography>
        </Box>
        <Box style={{ display: "flex", marginBottom: "1rem" }}>
          <Typography
            variant="p"
            component="p"
            style={{ fontFamily: "Montserrat", fontSize: "1.5rem" }}
          >
            Icekid Ds new song She Don Dey is
          </Typography>
          <Typography
            variant="p"
            component="p"
            style={{
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
              marginLeft: ".5rem",
              color: "#e2b945",
            }}
          >
            out now!
          </Typography>
        </Box>
        <Link
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
              color: "#e2b945",
            }}
          >
            CLICK HERE TO LISTEN
          </Typography>
        </Link>
        <Typography
          style={{ marginLeft: "5rem", marginRight: "5rem" }}
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
            style={{ marginLeft: "25rem" }}
          >
            More news
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default News;
