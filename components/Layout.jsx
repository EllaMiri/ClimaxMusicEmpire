import { Button, Typography, Box } from "@mui/material";
import styles from "../styles/Hero.module.css"

const Layout = () => {
  const textContentMediaQueries = {
    width: { xs: "100%", sm: "100%", md: "100%", lg: "100%" },
  };

  const titleBoxMediaQueries = {
    flexDirection: { xs: "column", sm: "row" },
  };

  const titleMediaQueries = {
    fontSize: { xs: "1.3rem", sm: "2.3rem", md: "4rem", lg: "5rem" },
  };

  const lastTitleMediaQueries = {
    marginLeft: { xs: "0.5rem", sm: "0.5rem", md: "0.5rem", lg: "1.5rem" },
  };

  const descriptionMediaQueries = {
    alignItems: {xs: "center", sm: "center", md: "flex-end", lg: "flex-end", xl: "flex-end"}
  }

  const paragraphMediaQueries = {
    fontSize: {xs: ".8rem", sm: "1.2rem", md: "1.3rem", lg: "1.5rem"}
  }

  const contactBtnMediaQueries = {
    fontSize: {xs: ".5rem", sm: ".9rem", md: ".9rem", lg: "1.2rem"}
  }

  return (
 
    <Box className={styles.container}>
      <Box>
        <video autoPlay muted loop className={styles.video}>
          <source src="./rolling-web-edit.mp4" type="video/mp4" />
        </video>
      </Box>
  
      <Box className={styles.heroText} sx={textContentMediaQueries}>
        <Box className={styles.titleBox} sx={titleBoxMediaQueries}>
          <Box className={styles.headingContainer}>
          <Typography sx={titleMediaQueries} variant="h1" component="h1">
            CLIMAX MUSIC
          </Typography>
          <Typography
            sx={[titleMediaQueries, lastTitleMediaQueries]}
            variant="h2"
            component="h2"
            className={styles.empire}
          >
            EMPIRE
          </Typography>
          </Box>
         
          <Box sx={descriptionMediaQueries} className={styles.description}>
        <Typography sx={paragraphMediaQueries} variant="p" component="p">
          Swedens aspiring music label
        </Typography>
        <Button
        sx={contactBtnMediaQueries}
          className={styles.contactBtn}
          variant="contained"
          color="primary"
        >
          Contact us
        </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
  }


export default Layout;
