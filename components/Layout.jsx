import { Button, Typography, Box } from "@mui/material";
import { useEffect } from "react";

const Layout = () => {
  const style = {
    width: "100%",
    height: "100%",
    position: "relative",
    margin: 0,
  };

  const textContent = {
    width: { xs: "100%", sm: "25rem", md: "25rem", lg: "60rem" },
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: { sm: "20%", md: "30%", lg: "15%", xl: "20%" },
  };

  const titleBox = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
  };

  const title = {
    fontSize: { xs: "2rem", lg: "5rem" },
  };

  const lastTitle = {
    marginLeft: { xs: "1.5rem", sm: "0.5rem", md: "0.5rem", lg: "1.5rem" },
  };

  return (
    <Box sx={style}>
      <Box>
        <video autoPlay muted loop style={{ width: "100%", height: "100%" }}>
          <source src="./rolling-web-edit.mp4" type="video/mp4" />
        </video>
      </Box>

      <Box sx={textContent}>
        <Box sx={titleBox}>
          <Typography sx={title} variant="h1" component="h1">
            CLIMAX MUSIC
          </Typography>
          <Typography
            sx={[title, lastTitle]}
            variant="h2"
            component="h2"
            style={{ color: "#E2B945" }}
          >
            EMPIRE
          </Typography>
        </Box>
        <Typography variant="p" component="p">
          Swedens aspiring music label
        </Typography>
        <Button
          style={{ marginTop: "1rem" }}
          variant="contained"
          color="primary"
        >
          Contact us
        </Button>
      </Box>
    </Box>
  );
};

export default Layout;
