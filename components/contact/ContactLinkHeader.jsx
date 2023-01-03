import { Typography } from "@mui/material";
import { Link } from "react-scroll";

export const ContactLinkHeader = () => {
  const navLinksBreakpoints = {
    display: {
      xs: "none",
      sm: "none",
      md: "block",
      lg: "block",
      xl: "block",
    },
  };

  return (
    <Link to="contact">
      <Typography sx={navLinksBreakpoints} variant="p" component="p">
        Contact
      </Typography>
    </Link>
  );
};

export default ContactLinkHeader;
