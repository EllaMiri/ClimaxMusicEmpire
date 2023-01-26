import { Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "../styles/Artist.module.css";
import Image from "next/image";

const Artist = () => {
  const router = useRouter();

  // Media queries
  const artistMediaQueries = {
    display: { xs: "flex", sm: "flex" },
    alignItems: { xs: "center", sm: "center", md: "flex-start" },
    flexDirection: { xs: "column", sm: "column" },
    width: { xs: "100%", md: "93%", lg: "93%" },
    marginLeft: { xs: 0, md: "3rem", lg: "3rem" },
    paddingLeft: { xs: "1rem", md: "0" },
    paddingRight: { xs: "1rem", md: "0" },
    marginTop: { xs: "1.5rem" },
  };

  const titleBoxMediaQueries = {};

  const lastTitleMediaQueries = {
    marginLeft: { xs: "0.1rem" },
  };

  const imageContainer = {
    display: "flex",
    alignItems: { sm: "center" },
    justifyContent: { sm: "center" },
  };

  const contentMediaQueries = {
    display: "flex",
    justifyContent: { sm: "space-between" },
    flexDirection: {
      xs: "column",
      md: "row-reverse",
    },
  };

  const textAndBtnMediaQueries = {
    display: { xs: "flex", md: "block" },
    flexDirection: "column",
    alignItems: { xs: "center" },
    width: { md: "50%", lg: "50%" },
  };

  return (
    <Box id="contact2" sx={artistMediaQueries}>
      <Box sx={titleBoxMediaQueries} className={styles.titleBox}>
        <Typography component="h2" variant="h2">
          ARTIST
        </Typography>
        <Typography
          sx={lastTitleMediaQueries}
          className={styles.s}
          component="h2"
          variant="h2"
        >
          S
        </Typography>
      </Box>
      <Box sx={contentMediaQueries}>
        <img className={styles.image} src="/ArtistImage.png" alt="" />
        <Box sx={textAndBtnMediaQueries}>
          <Typography className={styles.description} component="p" variant="p">
            Artists are the heart of what we do and we have deep reverence and
            respect for their creativity. We believe live music is vital to art
            and culture which is why we created this platform so that artists
            and music lovers can enjoy the art of creativity. Beyond global
            touring deals and festival performances, our Artist Empire offers
            services such as management, business marketing and consulting to
            artists across all genres.
          </Typography>
          <Button
            id="ourArtistsBtn"
            onClick={() => router.push("/Artists")}
            className={styles.ourArtistsBtn}
            variant="contained"
            color="secondary"
          >
            Our artists
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Artist;
