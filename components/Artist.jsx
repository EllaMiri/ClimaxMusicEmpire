import { Typography, Box } from "@mui/material";
import styles from "../styles/Artist.module.css";

const Artist = () => {
  const artistMediaQueries = {
    display: { xs: "flex", sm: "flex" },
    alignItems: { xs: "center", sm: "flex-start" },
    flexDirection: { xs: "column", sm: "column" },
  };

  const titleMediaQueries = {
    fontSize: { xs: "1.3rem", sm: "2.3rem", md: "4rem", lg: "5rem" },
  };

  const titleBoxMediaQueries = {
    marginLeft: { xs: 0, sm: "1.5rem", md: "3rem", lg: "6rem" },
  };

  const lastTitleMediaQueries = {
    marginLeft: { xs: "0.1rem" },
  };

  const imageContainer = {
    margin: { xs: "auto" },
  };

  const contentMediaQueries = {
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "row-reverse",
    },
  };

  const descriptionMediaQueries = {
    margin: { xs: "2rem auto 0", sm: "0 0 0 1rem" },
    width: { xs: "90%", sm: "75%", md: "50%" },
    fontSize: { xs: ".8rem", sm: "1.2rem", md: "1.3rem", lg: "1.5rem" },
  };
  return (
    <Box sx={artistMediaQueries}>
      <Box sx={titleBoxMediaQueries} className={styles.titleBox}>
        <Typography sx={titleMediaQueries} component="h2" variant="h2">
          ARTIST
        </Typography>
        <Typography
          sx={[titleMediaQueries, lastTitleMediaQueries]}
          className={styles.s}
          component="h2"
          variant="h2"
        >
          S
        </Typography>
      </Box>
      <Box sx={contentMediaQueries}>
        <Box className={styles.imageContainer} sx={imageContainer}>
          <img className={styles.image} src="./boi-ous.png" alt="boious" />
          <img className={styles.image1} src="./icekid-ds.png" alt="icekidds" />
        </Box>

        <Typography
          sx={descriptionMediaQueries}
          className={styles.description}
          component="p"
          variant="p"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          dolorum labore nemo ratione reprehenderit iure officia quod id quasi
          recusandae. Tempore ullam rem dignissimos doloremque quam deleniti
          consequatur velit natus?
        </Typography>
      </Box>
    </Box>
  );
};

export default Artist;
