import { Box, Typography } from "@mui/material";

import ContactForm from "./ContactForm";


const Contact = () => {

  return (
    <Box component="form" noValidate>
      <Box style={{ display: 'flex', flexDirection: 'column'}}>
        <Box style={{ display: 'flex' }}>
          <Typography variant="h2" component="h2">CONTACT</Typography>
          <Typography style={{ marginLeft: '1.2rem', color: "#e2b945"}} variant="h2" component="h2">US</Typography>
        </Box>
        <Box>
          <Typography variant="p" component="p">Are you an</Typography>
          <Typography variant="p" component="p" style={{color: "#e2b945"}}>eventplanner</Typography>
          <Typography variant="p" component="p">and want to book us for a</Typography>
          <Typography variant="p" component="p" style={{color: "#e2b945"}}>show?</Typography>
        </Box>
        <Box>
          <Typography variant="p" component="p">Or are you a</Typography>
          <Typography variant="p" component="p" style={{color: "#e2b945"}}>future music star</Typography>
          <Typography variant="p" component="p">and want to get</Typography>
          <Typography variant="p" component="p" style={{color: "#e2b945"}}>signed?</Typography>
        </Box>
      </Box>
      <ContactForm />
      </Box>

  );
};

export default Contact;
