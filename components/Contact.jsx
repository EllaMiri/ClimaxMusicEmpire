import { Box, Typography } from "@mui/material";
import styles from '../styles/Contact.module.css'

import ContactForm from "./ContactForm";

const Contact = () => {
  const contactPageMediaQueries = {
    flexDirection: {xs: 'column', lg: 'row'},
    alignItems: {xs: 'center'}
  }

  const textBoxMediaQueries = {
    width: {xs: '100%', lg: '50%'},
    marginBottom: {xs: '3rem', lg: '0'}
  }

  const formBoxMediaQueries = {
    width: {xs: '100%', lg: '50%'}
  }

  return (
    <Box sx={contactPageMediaQueries} className={styles.contactPageBox}>
      <Box sx={textBoxMediaQueries} className={styles.textBox}>
        <Box className={styles.innerTextBox}>
          <Box className={styles.titleBox}>
            <Typography variant="h2" component="h2">
              CONTACT
            </Typography>
            <Typography
              style={{ marginLeft: "1.2rem", color: "#e2b945" }}
              variant="h2"
              component="h2"
            >
              US
            </Typography>
          </Box>
          <Box style={{ marginBottom: ".5rem" }}>
            <Typography
              variant="p"
              component="p"
              className={styles.contactDescription}
            >
              Are you an
            </Typography>
            <Typography
              variant="p"
              component="p"
              className={styles.yellowContactDescription}
            >
              eventplanner
            </Typography>
            <Typography
              variant="p"
              component="p"
              className={styles.contactDescription}
            >
              and want to book us for a
            </Typography>
            <Typography
              variant="p"
              component="p"
              className={styles.yellowContactDescription}
            >
              show?
            </Typography>
          </Box>
          <Box className={styles.secondVerse}>
            <Typography
              variant="p"
              component="p"
              className={styles.contactDescription}
            >
              Or are you a
            </Typography>
            <Typography
              variant="p"
              component="p"
              className={styles.yellowContactDescription}
            >
              future music star
            </Typography>
            <Typography
              variant="p"
              component="p"
              className={styles.contactDescription}
            >
              and want to get
            </Typography>
            <Typography
              variant="p"
              component="p"
              className={styles.yellowContactDescription}
            >
              signed?
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={formBoxMediaQueries}>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
