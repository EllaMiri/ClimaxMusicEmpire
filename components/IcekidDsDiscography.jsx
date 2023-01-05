import { Box, getAutocompleteUtilityClass, Typography } from "@mui/material";
import Spotify from "react-spotify-embed";
import Iframe from "react-iframe";

const IcekidDsDiscography = () => {
  return (
    <Box style={{ display: "flex", justifyContent: "flex-end" }}>
      <Box style={{ display: "flex" }}>
        <Typography variant="h2" component="h2">
          DISCOGRAPH
        </Typography>
        <Typography style={{ color: "#e2b945" }} variant="h2" component="h2">
          Y
        </Typography>
        <Box>
          {/* <Spotify link="https://open.spotify.com/track/35tqPlW2KuQ77JtA1jDxIL?si=dccde9e6eaa84f2b"></Spotify> */}
          <Box>
            <iframe
              src="https://open.spotify.com/embed/album/43LBs5VnAYmKjO4xyZts7w?utm_source=generator"
              //   width="100%"
              //   height="380"
              frameBorder="0"
              allowFullScreen=""
              //   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              //   loading="lazy"
            ></iframe>
          </Box>
          {/* <Box>
            <iframe
            
              src="https://open.spotify.com/embed/album/5ke4vbdg2gV4PPXq8r7LzB?utm_source=generator"
              width="100%"
              height="380"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default IcekidDsDiscography;
