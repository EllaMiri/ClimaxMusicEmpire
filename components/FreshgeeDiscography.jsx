import { Box, Typography } from "@mui/material";
import styles from "../styles/Discography.module.css";
import Iframe from "react-iframe";

const FreshgeeDiscography = () => {
  let songs = [
    {
      url: "https://open.spotify.com/embed/album/4jralfqL4gCZAPO8X1hBjg?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/0JQASZiU4w618Ph6LCo7nF?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/1DPrkb6FqFQlRCZmIw6wnm?utm_source=generator",
    },
  ];

  let videos = [
    {
      url: "https://www.youtube.com/embed/E5fMwwtMQE8"
    },
    {
      url: "https://www.youtube.com/embed/dL_QIZN0vVk"
    }
  ]
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
      <Box className={styles.songsContainer}>
        {videos.map((video) => (
          <Box key={video.url}>
            <Iframe url={video.url}
                    width="640px"
                    height="320px"
                    id=""
                    className=""
                    display="block"
                    position="relative" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FreshgeeDiscography;
