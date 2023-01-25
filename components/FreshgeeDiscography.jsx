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
      url: "https://www.youtube.com/embed/E5fMwwtMQE8",
    },
    {
      url: "https://www.youtube.com/embed/dL_QIZN0vVk",
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
              style={{ color: "white", cursor: "pointer" }}
              onClick={Cookiebot.renew()}
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
              display="block"
              position="relative"
            />
            <div
              style={{ color: "white", cursor: "pointer" }}
              onClick={Cookiebot.renew()}
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

export default FreshgeeDiscography;
