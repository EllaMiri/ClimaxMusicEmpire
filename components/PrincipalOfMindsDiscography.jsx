import { Box, Typography } from "@mui/material";

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

  return (
    <Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "3rem",
        }}
      >
        <Typography variant="h2" component="h2">
          DISCOGRAPH
        </Typography>
        <Typography style={{ color: "#e2b945" }} variant="h2" component="h2">
          Y
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginTop: "3rem",
        }}
      >
        {songs.map((song) => (
          <Box style={{ marginBottom: "3rem" }} key={song.url}>
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

export default PrincipalOfMindsDiscography;
