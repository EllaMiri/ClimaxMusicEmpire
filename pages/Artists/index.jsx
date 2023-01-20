import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import styles from "../../styles/Artists.module.css";
import SEO from "@bradgarropy/next-seo";

const Artists = () => {
  const artistsBoxMediaQueries = {
    paddingTop: { xs: "6rem" },
  };

  const artistBoxMediaQueries = {
    display: { xs: "flex", lg: "flex" },
    flexDirection: { xs: "column", md: "row" },
    flexWrap: { md: "wrap" },
    alignItems: { xs: "center" },
  };

  const boiOusMediaQueries = {
    marginTop: { xs: "1rem", lg: "5rem" },
    marginRight: { xs: "0", md: "1rem", lg: "1rem" },
    marginBottom: { xs: "1rem", lg: "0" },
  };

  const freshgeeMediaQueries = {
    marginTop: { xs: "1rem", lg: "7rem" },
    marginLeft: { xs: "0", md: "1rem", lg: "1rem" },
    marginRight: { xs: "0", md: "1rem", lg: "1rem" },
    marginBottom: { xs: "1rem", lg: "0" },
  };

  const titleBox = {
    justifyContent: { xs: "center", lg: "flex-start" },
    marginLeft: { xs: "0", lg: "5rem" },
  };

  const h1MediaQueries = {
    fontSize: { xs: "2.5rem", sm: "4rem" },
  };

  return (
    <Box sx={artistsBoxMediaQueries}>
      <SEO title="Artists" description="All the artists that Climax Music Empire has signed" />
      <Box sx={titleBox} className={styles.titleBox}>
        <Typography sx={h1MediaQueries} component="h1" variant="h1">
          ARTIST
        </Typography>
        <Typography component="h2" variant="h2" className={styles.yellowText}>
          S
        </Typography>
      </Box>

      <Box sx={artistBoxMediaQueries} className={styles.artistContainer}>
        <Box sx={boiOusMediaQueries}>
          <Box className={styles.artistNameBox}>
            <Typography
              style={{ fontFamily: "Montserrat" }}
              component="p"
              variant="p"
            >
              BOI
            </Typography>
            <Typography
              component="p"
              variant="p"
              style={{ fontFamily: "Montserrat", marginLeft: "0.5rem" }}
              className={styles.yellowText}
            >
              OUS
            </Typography>
          </Box>
          <Link href="/Artists/BoiOus">
            <Box className={styles.imageContainer}>
              <img
                src="./boi-ous.png"
                alt="Artist Boi Ous"
                style={{ height: "auto", width: "18rem" }}
                className={styles.image}
              />
              <Box className={styles.overlay}>
                <Typography className={styles.text}>READ MORE</Typography>
              </Box>
            </Box>
          </Link>
        </Box>

        <Box>
          <Box className={styles.artistNameBox}>
            <Typography
              style={{ fontFamily: "Montserrat" }}
              component="p"
              variant="p"
            >
              ICEKID
            </Typography>
            <Typography
              component="p"
              variant="p"
              style={{ fontFamily: "Montserrat", marginLeft: "0.5rem" }}
              className={styles.yellowText}
            >
              DS
            </Typography>
          </Box>
          <Link href="/Artists/IcekidDs">
            <Box className={styles.imageContainer}>
              <img
                src="./icekid-ds.png"
                alt="Artist IceKid DS"
                className={styles.image}
                style={{ height: "auto", width: "18rem" }}
              />
              <Box className={styles.overlay}>
                <Typography className={styles.text}>READ MORE</Typography>
              </Box>
            </Box>
          </Link>
        </Box>
        <Box sx={freshgeeMediaQueries}>
          <Box className={styles.artistNameBox}>
            <Typography
              style={{ fontFamily: "Montserrat" }}
              component="p"
              variant="p"
            >
              FRESH
            </Typography>
            <Typography
              component="p"
              variant="p"
              style={{ fontFamily: "Montserrat" }}
              className={styles.yellowText}
            >
              GEE
            </Typography>
          </Box>
          <Link href="/Artists/Freshgee">
            <Box className={styles.imageContainer}>
              <img
                src="./freshgee.png"
                alt="Artist Freshgee"
                className={styles.image}
                style={{ height: "auto", width: "18rem" }}
              />
              <Box className={styles.overlay}>
                <Typography className={styles.text}>READ MORE</Typography>
              </Box>
            </Box>
          </Link>
        </Box>
        <Box>
          <Box className={styles.artistNameBox}>
            <Typography
              style={{ fontFamily: "Montserrat" }}
              component="p"
              variant="p"
            >
              PRINCIPAL OF
            </Typography>
            <Typography
              component="p"
              variant="p"
              style={{ fontFamily: "Montserrat", marginLeft: "0.5rem" }}
              className={styles.yellowText}
            >
              MINDS
            </Typography>
          </Box>
          <Link href="/Artists/PrincipalOfMinds">
            <Box className={styles.imageContainer}>
              <img
                src="./PrincipalOfMinds.png"
                alt="Artist Principal of Minds"
                className={styles.image}
                style={{ height: "auto", width: "18rem" }}
              />
              <Box className={styles.overlay}>
                <Typography className={styles.text}>READ MORE</Typography>
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Artists;
