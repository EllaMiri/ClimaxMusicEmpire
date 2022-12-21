import { Button, Typography } from "@mui/material";

const News = () => {
  const style = {
    color: { xs: "purple", sm: "red", md: "blue", lg: "pink", xl: "orange" },
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Typography variant="h2" component="h2">
          NEW
        </Typography>
        <Typography component="h2" variant="h2" style={{ color: "#E2B945" }}>
          S
        </Typography>
      </div>
      <Typography sx={style} variant="p" component="p">
        Hello my name is Ella
      </Typography>
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
