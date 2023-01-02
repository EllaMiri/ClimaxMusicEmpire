import { Typography } from "@mui/material";
import { Box } from "@mui/system";

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
        <Typography
          style={{ marginLeft: "5rem", marginRight: "5rem" }}
          component="p"
          variant="p"
        >
          She Don Dey, made by Icekid Ds is his latest song, bringing afrobeat
          and amapiano vibes with a beat produced by WavvyBeatz.
        </Typography>
      </Box>
    </Box>
  );
};

export default News;
