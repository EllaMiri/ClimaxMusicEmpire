import { Typography, Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "../styles/Artist.module.css";
import Image from "next/image";

const Artist = () => {
  const router = useRouter();

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
    <Box
      style={{ marginBottom: "5rem" }}
      // style={{
      //   minHeight: "105vh",
      //   display: "flex",
      //   justifyContent: "center",
      // }}
      id="contact2"
      sx={artistMediaQueries}
    >
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
        <Box className={styles.imageContainer} sx={imageContainer}>
          <Image
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            className={styles.image}
            src="/IcekidDSAndBoiOus.png"
            alt="Icekid DS and Boi Ous"
          />
        </Box>
        <Box sx={textAndBtnMediaQueries}>
          <Typography className={styles.description} component="p" variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            dolorum labore nemo ratione reprehenderit iure officia quod id quasi
            recusandae. Tempore ullam rem dignissimos doloremque quam deleniti
            consequatur velit natus? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt dolorum labore nemo ratione reprehenderit
            iure officia quod id quasi recusandae. Tempore ullam rem dignissimos
            doloremque quam deleniti consequatur velit natus? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Incidunt dolorum labore nemo
            ratione reprehenderit iure officia quod id quasi recusandae. Tempore
            ullam rem dignissimos doloremque quam deleniti consequatur velit
            natus?
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
