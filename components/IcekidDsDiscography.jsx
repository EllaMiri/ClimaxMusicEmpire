import { Box, Typography } from "@mui/material";
import styles from "../styles/Discography.module.css";

const IcekidDsDiscography = () => {
  let songs = [
    {
      url: "https://open.spotify.com/embed/track/35tqPlW2KuQ77JtA1jDxIL?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/album/5ke4vbdg2gV4PPXq8r7LzB?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/0qAJwzWRsSCGxg4M7WMApr?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/0KYcjcbw3tfXxlbeI7uvwK?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/4VgOdHJmvtOCybJ7kU2SuC?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/5xoSN9WJMwOj7kIYafoZdQ?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/2Qwi25eJYEJQkgsC6L3pE2?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/2GhrttcKjet5HKRIXhcx1p?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/album/5gLaTey1hvb3b3Mb4tT09J?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/3InF4n2PUIa9lQwQzRO6Ly?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/3QCcEIKy87k855rZWpfkhm?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/5sOXZG8nIZqZ7V9wyfT777?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/75uvzFOvBLGiMiPRDIri7e?utm_source=generator",
    },
    {
      url: "https://open.spotify.com/embed/track/6T8YstfzUg8vRuS5OYtb42?utm_source=generator",
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

export default IcekidDsDiscography;
