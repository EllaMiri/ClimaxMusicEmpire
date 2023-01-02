import { Box, Typography } from "@mui/material";

import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Box style={{ display: "flex", justifyContent: "space-around" }}>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Box style={{ display: "flex", marginBottom: "1rem" }}>
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
              style={{ display: "inline", marginRight: ".4rem" }}
            >
              Are you an
            </Typography>
            <Typography
              variant="p"
              component="p"
              style={{
                color: "#e2b945",
                display: "inline",
                marginRight: ".4rem",
              }}
            >
              eventplanner
            </Typography>
            <Typography
              variant="p"
              component="p"
              style={{ display: "inline", marginRight: ".4rem" }}
            >
              and want to book us for a
            </Typography>
            <Typography
              variant="p"
              component="p"
              style={{
                color: "#e2b945",
                display: "inline",
                marginRight: ".4rem",
              }}
            >
              show?
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="p"
              component="p"
              style={{ display: "inline", marginRight: ".4rem" }}
            >
              Or are you a
            </Typography>
            <Typography
              variant="p"
              component="p"
              style={{
                color: "#e2b945",
                display: "inline",
                marginRight: ".4rem",
              }}
            >
              future music star
            </Typography>
            <Typography
              variant="p"
              component="p"
              style={{ display: "inline", marginRight: ".4rem" }}
            >
              and want to get
            </Typography>
            <Typography
              variant="p"
              component="p"
              style={{
                color: "#e2b945",
                display: "inline",
                marginRight: ".4rem",
              }}
            >
              signed?
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box style={{ width: "40%" }}>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default Contact;
