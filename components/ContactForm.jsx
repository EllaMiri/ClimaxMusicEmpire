import { Box, Button, FormControl, FormControlLabel, RadioGroup, TextField } from "@mui/material";
import { Radio } from "@mui/material";
import { useState } from "react";


const ContactForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [firstNameErrorText, setFirstNameErrorText] = useState("")
  const [lastNameErrorText, setLastNameErrorText] = useState("")
  const [emailErrorText, setEmailErrorText] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    if (!firstName) {
      setFirstNameErrorText("Please enter your firstname")
    } else { setFirstNameErrorText("") }
    if (!lastName) {
      setLastNameErrorText("Please enter your lastname")
    } else { setLastNameErrorText("") }
    if (!email) {
      setEmailErrorText("Please enter your email")
    } else { setEmailErrorText("") }
  }

  return (
    <Box component="form" noValidate style={{
      borderTop: "6rem solid #e2b945",
      borderBottom: "6rem solid #e2b945",
      borderLeft: "2rem solid #e2b945",
      borderRight: "2rem solid #e2b945"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "3rem",
        paddingBottom: "3rem"
      }}>

        <FormControl>
          <RadioGroup style={{ display: "flex", flexDirection: "row", color: "white" }}>
            <FormControlLabel value="Artist" control={<Radio />} label="l'm an Artist" />
            <FormControlLabel value="Eventplanner" control={<Radio />} label="l'm an Eventplanner" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <TextField style={{ backgroundColor: "white", marginBottom: ".5rem", borderRadius: "10px", width: "70%" }}
                     id="outlined-error-firstname"
                     label="Firstname"
                     required
                     type="firstName"
                     name="firstName"
                     value={firstName}
                     error={!!firstNameErrorText}
                     helperText={!!firstNameErrorText}
                     onChange={e => setFirstName(e.target.value)}
                    />
          <TextField style={{ backgroundColor: "white", marginBottom: ".5rem", borderRadius: "10px", width: "70%" }}
                     id="outlined-error-lastname"
                     label="Lastname"
                     required
                     type="lastName"
                     name="lastName"
                     value={lastName}
                     error={!!lastNameErrorText}
                     helperText={!!lastNameErrorText}
                     onChange={e => setLastName(e.target.value)} />
          {/*{value === "Eventplanner" ?*/}
            <TextField style={{ backgroundColor: "white", marginBottom: ".5rem", borderRadius: "10px", width: "70%" }}
                       id="outlined-error-company"
                       label="Company" />
             {/*: "" }*/}

          <TextField style={{ backgroundColor: "white", marginBottom: ".5rem", borderRadius: "10px", width: "70%" }}
                     id="outlined-error-email"
                     label="Email"
                     required
                     type="email"
                     name="email"
                     value={email}
                     error={!!emailErrorText}
                     helperText={!!emailErrorText}
                     onChange={e => setEmail(e.target.value)}

                />
          <TextField style={{
            backgroundColor: "white",
            marginBottom: ".5rem",
            marginTop: ".5rem",
            borderRadius: "10px",
            width: "400px"
          }}
                     id="outlined-multiline-static"
                     label="Description"
                     multiline
                     rows={4}
          />
          <Button type="submit" onClick={onSubmit} style={{ backgroundColor: "#e2b945", color: "white", width: "10rem" }}>Send</Button>
        </Box>

      </div>
    </Box>
  );
};

export default ContactForm;
