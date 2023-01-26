import { Box, Typography } from "@mui/material";
import styles from "../styles/Discography.module.css";
import Iframe from "react-iframe";

const BoiOusDiscography = () => {
  let songs = [
    {
      url: "https://open.spotify.com/embed/track/1RxJLlpt8fD6caAp82bEzn?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/0L0kWpl7LRH2n3CSL3toIM?utm_source=generator",
    },
  ];

  let videos = [
    {
      url: "https://www.youtube.com/embed/6EY1vhSnhFo",
    },
    {
      url: "https://www.youtube.com/embed/ZKIE0OKmSIU",
    },
  ];

  const titleMediaQueries = {
    fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
  };

  return (
    <Box>
      <Box className={styles.title}>
        <Typography sx={titleMediaQueries} variant="h2" component="h2">
          DISCOGRAPH
        </Typography>
        <Typography
          sx={titleMediaQueries}
          className={styles.goldColor}
          variant="h2"
          component="h2"
        >
          Y
        </Typography>
      </Box>
      <Box className={styles.songsContainer}>
        {songs.map((song) => (
          <Box className={styles.iframeContainer} key={song.url}>
            <iframe
              data-cookieconsent="marketing"
              data-cookieblock-src={song.url}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <div
              style={{ color: "white" }}
              className="cookieconsent-optout-marketing"
            >
              Please
              <p>accept marketing-cookies</p>
              to play this song.
            </div>
          </Box>
        ))}
      </Box>
      <Box className={styles.videoContainer}>
        {videos.map((video) => (
          <Box key={video.url} className={styles.videoIframeContainer}>
            <iframe
              data-cookieconsent="marketing"
              data-cookieblock-src={video.url}
              width="100%"
              height="320px"
              id=""
              className=""
              display="block"
              position="relative"
            />
            <div
              style={{ color: "white" }}
              className="cookieconsent-optout-marketing"
            >
              Please
              <p>accept marketing-cookies</p>
              to watch this video.
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BoiOusDiscography;
