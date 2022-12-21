import { createTheme } from "@mui/material/styles";

const CustomTheme = createTheme({
  typography: {
    h1: {
      fontFamily: "Montserrat",
      fontWeight: "bold",
      color: "white",
    },
    h2: {
      fontFamily: "Montserrat",
      fontWeight: "bold",
      color: "white",
    },
    p: {
      fontFamily: "Noto serif",
      color: "white",
    },
    span: {
      fontFamily: "Noto serif",
      color: "white",
    },
    button: {
      fontFamily: "Noto serif",
    },
  },
  palette: {
    primary: {
      main: "#E2B945",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
      contrastText: "#FFFFFF",
    },
  },
});

export default CustomTheme;
