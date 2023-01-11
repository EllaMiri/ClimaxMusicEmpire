import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const StylingTest = () => {
  const test = {
    color: "blue",
  };

  return (
    <Box
      style={{
        backgroundColor: "purple",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography sx={test} variant="h1" component="h1">
        STYLING
      </Typography>
      <Typography style={{ color: "red" }} variant="h2" component="h2">
        TEST
      </Typography>
    </Box>
  );
};

export default StylingTest;
