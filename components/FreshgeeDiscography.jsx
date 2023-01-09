import { Box, Typography } from "@mui/material";

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

export default FreshgeeDiscography;
