import { Typography } from "@mui/material";
import { Link } from "react-scroll";
import styles from "../../styles/Footer.module.css";

export const ContactLinkFooter = () => {
  const lowerMediaQueries = {
    fontSize: { xs: ".7rem", sm: ".8rem", md: "1rem" }
  };

  return (

    <Link to="contact">
      <Typography
        variant="p" component="p" sx={lowerMediaQueries} className={styles.contactLink}
      >
        CONTACT
      </Typography>
    </Link>

  );
};

export default ContactLinkFooter;