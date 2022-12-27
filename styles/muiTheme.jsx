import { createTheme } from "@mui/material/styles";

let customTheme = createTheme();
customTheme = createTheme(customTheme, {
  typography: {
    h1: {
      [customTheme.breakpoints.down("xs")]: {
        fontSize: "1.3rem", // 20px
      },
      [customTheme.breakpoints.down("sm")]: {
        fontSize: "2.3rem", // 20px
      },
      [customTheme.breakpoints.down("lg")]: {
        fontSize: "5rem", // 20px
      },
      [customTheme.breakpoints.down("md")]: {
        fontSize: "4rem", // 20px
      },
      fontFamily: "Montserrat",
      fontWeight: "bold",
      color: "white",
    },
    h2: {
      [customTheme.breakpoints.up("md")]: {
        fontSize: "4rem", // 20px
      },
      [customTheme.breakpoints.down("sm")]: {
        fontSize: "2.5rem", // 20px
      },
      fontFamily: "Montserrat",
      fontWeight: "bold",
      color: "white",
    },
    p: {
      [customTheme.breakpoints.up("sm")]: {
        fontSize: "1.2rem", // 20px
      },
      [customTheme.breakpoints.down("xs")]: {
        fontSize: "1rem", // 20px
      },
      fontFamily: "Noto serif",
      color: "white",
    },
    span: {
      [customTheme.breakpoints.up("sm")]: {
        fontSize: "1.2rem", // 20px
      },
      [customTheme.breakpoints.down("xs")]: {
        fontSize: "1rem", // 20px
      },
      fontFamily: "Noto serif",
      color: "white",
    },
    button: {
      fontFamily: "Noto serif",
      [customTheme.breakpoints.down("xs")]: {
        fontSize: ".5rem", // 20px
      },
      [customTheme.breakpoints.up("sm")]: {
        fontSize: ".9rem", // 20px
      },
      [customTheme.breakpoints.up("lg")]: {
        fontSize: "1.2rem", // 20px
      },
    },
  },
  palette: {
    primary: {
      main: "#E2B945",
      contrastText: "#FFFFFF",
      hover: "#E2B945",
    },
    secondary: {
      main: "#000000",
      contrastText: "#FFFFFF",
    },
  },
});

export default customTheme;
