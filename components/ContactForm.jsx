import { Box, Button, FormControl, FormControlLabel, RadioGroup, TextField } from "@mui/material";
import { Radio } from "@mui/material";


const ContactForm = () => {

  return (
    <Box component="form" noValidate style={{ marginTop: '3rem', border: '1rem solid #e2b945'}}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>

        <FormControl>
          <RadioGroup style={{ display: "flex", flexDirection: "row", color: "white" }}>
            <FormControlLabel value="Artist" control={<Radio />} label="Artist" />
            <FormControlLabel value="Eventplanner" control={<Radio />} label="Eventplanner" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <Box style={{ display: "flex", flexDirection: "column" }}>
          <TextField style={{ backgroundColor: "white", marginBottom: '.5rem' }} error id="outlined-error-firstname"
                     helperText="Enter your firstname" label="Firstname" />
          <TextField style={{ backgroundColor: "white", marginBottom: '.5rem' }} error id="outlined-error-lastname"
                     helperText="Enter your lastname" label="Lastname" />
          <TextField style={{ backgroundColor: "white", marginBottom: '.5rem' }} error id="outlined-error-email" helperText="Enter your email"
                     label="Email" />
          <TextField style={{ backgroundColor: "white", marginBottom: '.5rem' }}
                     id="outlined-multiline-static"
                     label="Description"
                     multiline
                     rows={4}
                     defaultValue="Description"
          />
          <Button style={{backgroundColor: "#e2b945", color: 'white'}}>Send</Button>
        </Box>

      </div>
    </Box>
  );
};

export default ContactForm;
