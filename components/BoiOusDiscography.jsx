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
              data-cookieconsent="marketing"
              // alt="Please accept cookie policy first"
              // data-cookiescript="accepted"
              // data-cookiecategory="functionality"
              data-cookieblock-src={song.url}
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
      <Box className={styles.videoContainer}>
        {videos.map((video) => (
          <Box key={video.url} className={styles.videoIframeContainer}>
            <iframe
              data-cookieconsent="marketing"
              // data-cookiecategory="targeting"
              // alt="Please accept cookie policy first"
              // data-cookiescript="accepted"
              data-cookieblock-src={video.url}
              width="100%"
              height="320px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BoiOusDiscography;
