import { Button, Typography } from "@mui/material";

const News = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Typography variant="h2" component="h1">
          NEW
        </Typography>
        <Typography component="h2" variant="h2" style={{ color: "#E2B945" }}>
          S
        </Typography>
      </div>

      <Button variant="contained" color="primary">
        More news
      </Button>
      <Button variant="contained" color="secondary">
        More news
      </Button>
    </div>
  );
};

export default News;
