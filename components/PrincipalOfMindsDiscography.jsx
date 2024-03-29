import { Box, Typography } from "@mui/material";
import styles from "../styles/Discography.module.css";

const PrincipalOfMindsDiscography = () => {
  // Array of the spotify songs
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

  //Array of youtube videos
  let videos = [
    {
      url: "https://www.youtube.com/embed/oLEpNF7m9ZA",
    },
    {
      url: "https://www.youtube.com/embed/7wG-7zPPK20",
    },
  ];

  // Media queries
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
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
              }}
              className="cookieconsent-optout-marketing"
            >
              <p> Please accept marketing-cookies to listen to this song.</p>
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
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center",
              }}
              className="cookieconsent-optout-marketing"
            >
              <p> Please accept marketing-cookies to watch this video.</p>
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PrincipalOfMindsDiscography;
