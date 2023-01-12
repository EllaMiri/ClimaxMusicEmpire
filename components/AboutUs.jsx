import { Typography, Box } from "@mui/material";
import styles from "../styles/AboutUs.module.css";

const AboutUs = () => {
  const aboutUSMediaQueries = {
    display: { xs: "flex", sm: "flex" },
    alignItems: { xs: "center", sm: "center", md: "flex-start" },
    width: { xs: "100%", md: "85%", lg: "%" },
    flexDirection: { xs: "column", sm: "column" },
    marginLeft: { xs: 0, md: "3rem", lg: "3rem" },
    paddingLeft: { xs: "1rem", md: "0" },
    paddingRight: { xs: "1rem", md: "0" },
    marginTop: { xs: "1.5rem" },
  };

  const imageMediaQueries = {
    paddingLeft: { xs: "0", md: "5rem" },
  };

  const lastTitleMediaQueries = {
    marginLeft: { xs: "0.5rem", sm: "1rem", lg: "1.5rem" },
  };

  const contentMediaQueries = {
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row-reverse",
      lg: "row-reverse",
    },
    justifyContent: { xs: "center", sm: "space-around" },
    alignItems: { xs: "center" },
  };

  const descriptionMediaQueries = {
    marginTop: { xs: "1rem", sm: "0" },
    textAlign: { xs: "center", sm: "center", md: "left" },
  };

  return (
    <Box sx={aboutUSMediaQueries}>
      <Box className={styles.titleBox}>
        <Typography component="h2" variant="h2">
          ABOUT
        </Typography>
        <Typography
          sx={lastTitleMediaQueries}
          className={styles.us}
          component="h2"
          variant="h2"
        >
          US
        </Typography>
      </Box>
      <Box sx={contentMediaQueries}>
        <Box sx={imageMediaQueries}>
          <img
            className={styles.image}
            src="./bigLogo.png"
            alt="Climax Music Empire Logo"
          />
        </Box>

        <Typography
          sx={descriptionMediaQueries}
          className={styles.description}
          component="p"
          variant="p"
        >
          We learned that music has the power to bring us together and heal us
          from our differences. Music saved us and made us realize who we are.
          So, music belongs to us as much as it does to anyone in our family, as
          well as to anyone who loves music. And as Climax Music Empire, we
          don’t want to tell artists who to be. We want to create a space for
          them to share themselves with the world on their terms irrespective of
          who you are or where you’re from. As we are the next big thing
          competing with the global leading music company, our goal is to make
          difference, to do that we have to reach out, therefore we are
          constantly working in all aspects to find new ways that break through
          to the global spotlight with the right audience for the artists we
          represent. Therefore, our responsibility of nurturing music creation,
          promoting artistry, and making use of talent is ours. As it guided us
          to create this platform, making good music with the power to heal,
          inspire and guide is a priority.
          <br />
          <br />
          That is who we are! And that...
          <br />
          That’s Climax Music Empire.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
