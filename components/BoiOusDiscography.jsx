import { Box, Typography } from "@mui/material";
import styles from "../styles/Discography.module.css";

const BoiOusDiscography = () => {
  let songs = [
    {
      url: "https://open.spotify.com/embed/track/1RxJLlpt8fD6caAp82bEzn?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/0L0kWpl7LRH2n3CSL3toIM?utm_source=generator",
    },
  ];

  return (
    <Box>
      <Box className={styles.title}>
        <Typography variant="h2" component="h2">
          DISCOGRAPH
        </Typography>
        <Typography className={styles.goldColor} variant="h2" component="h2">
          Y
        </Typography>
      </Box>
      <Box className={styles.songsContainer}>
        {songs.map((song) => (
          <Box className={styles.iframeContainer} key={song.url}>
            <iframe
              src={song.url}
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BoiOusDiscography;
