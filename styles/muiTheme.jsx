import { createTheme } from "@mui/material/styles";


// Our custom theme created with Material UI to enable custom styling to elements
let customTheme = createTheme();
customTheme = createTheme(customTheme, {
  typography: {
    h1: {
      [customTheme.breakpoints.down("xs")]: {
        fontSize: "1.3rem",
      },
      [customTheme.breakpoints.down("sm")]: {
        fontSize: "2.3rem",
      },
      [customTheme.breakpoints.down("lg")]: {
        fontSize: "5rem",
      },
      [customTheme.breakpoints.down("md")]: {
        fontSize: "4rem",
      },
      fontFamily: "Montserrat",
      fontWeight: "bold",
      color: "white",
    },
    h2: {
      [customTheme.breakpoints.up("md")]: {
        fontSize: "4rem",
      },
      [customTheme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      fontFamily: "Montserrat",
      fontWeight: "bold",
      color: "white",
    },
    p: {
      [customTheme.breakpoints.up("sm")]: {
        fontSize: "1.2rem",
      },
      [customTheme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
      fontFamily: "Noto serif",
      color: "white",
    },
    span: {
      [customTheme.breakpoints.up("sm")]: {
        fontSize: "1.2rem",
      },
      [customTheme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
      fontFamily: "Noto serif",
      color: "white",
    },
    button: {
      textTransform: "none",
      fontFamily: "Noto serif",
      [customTheme.breakpoints.down("xs")]: {
        fontSize: ".5rem",
      },
      [customTheme.breakpoints.up("sm")]: {
        fontSize: ".9rem",
      },
      [customTheme.breakpoints.up("lg")]: {
        fontSize: "1.2rem",
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
