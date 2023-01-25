import { Box, Typography } from "@mui/material";
import styles from "../styles/Discography.module.css";
import Iframe from "react-iframe";

const PrincipalOfMindsDiscography = () => {
  let songs = [
    {
      url: "https://open.spotify.com/embed/track/35XBCpZn5qQTAXlVvrBPYx?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/3ZUHhMwtjDEGNe0LSGQavi?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/album/1CuQnq9ou39wZE8KeX3EfE?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/1qGpQ1O05NJ6azFWg0QTKl?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/3AcRDuxPgrFHDa9pxCQ2DI?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/4vfPGiJsDs5XEyw29uAFvh?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/album/5ue5xRlbT5KBP515wGVOOo?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/3Wc6NeMNC3GiNydHD0YJFC?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/6rm3kmpHUIP4viyeprl5pF?utm_source=generator",
    },
  ];

  let videos = [
    {
      url: "https://www.youtube.com/embed/oLEpNF7m9ZA",
    },
    {
      url: "https://www.youtube.com/embed/7wG-7zPPK20",
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
              class="cookieconsent-optout-marketing"
              onClick={Cookiebot.renew()}
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
              onClick={Cookiebot.renew()}
              style={{ color: "white", cursor: "pointer" }}
              class="cookieconsent-optout-marketing"
            >
              Please
              <p

              // href="javascript:Cookiebot.renew()"
              >
                accept marketing-cookies
              </p>
              to watch this video.
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PrincipalOfMindsDiscography;
