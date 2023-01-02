import { Box, Button, FormControl, FormControlLabel, RadioGroup, TextField, Typography } from "@mui/material";
import { Radio } from "@mui/material";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const ContactForm = () => {
  const [showHide, setShowHide] = useState("showArtist");
  const [_, setShowRole] = useState("showArtist");

  const form = useRef();

  const handleShow = (e) => {
    const getShow = e.target.value;
    setShowHide(getShow);
    setShowRole(getShow);
  };

  const onSubmit = () => {

    emailjs.sendForm("service_a62px2m", "template_5u6kgik", form.current, "xBwMCYQyB3YvK0lkv")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("Firstname is required")
      .min(2, "Firstname must be at least 2 characters"),
    lastname: Yup.string()
      .required("Lastname is required")
      .min(2, "Lastname must be at least 2 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at lease 10 characters")
  });

  const {
    register, handleSubmit, formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  return (
    <Box component="form" ref={form} onSubmit={onSubmit} noValidate style={{
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
          <RadioGroup defaultChecked="showArtist" style={{ display: "flex", flexDirection: "row", color: "white" }}>
            <FormControlLabel name="artist" value="showArtist" checked={showHide === "showArtist"} onClick={handleShow}
                              control={<Radio />} label="l'm an Artist" />
            <FormControlLabel name="eventplanner" value="showCompany" checked={showHide === "showCompany"}
                              onClick={handleShow} control={<Radio />} label="l'm an Eventplanner" />
            <FormControlLabel name="other" value="showOther" checked={showHide === "showOther"} onClick={handleShow}
                              control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <TextField style={{ backgroundColor: "white", marginBottom: ".5rem", borderRadius: "10px", width: "70%" }}
                     required
                     id="firstname"
                     name="firstName"
                     label="Firstname"
                     {...register("firstname")}
                     error={!!errors.firstname}
          />
          <Typography variant="p" color="red">{errors.firstname?.message}</Typography>
          <TextField style={{ backgroundColor: "white", marginBottom: ".5rem", borderRadius: "10px", width: "70%" }}
                     required
                     id="lastname"
                     name="lastName"
                     label="Lastname"
                     {...register("lastname")}
                     error={!!errors.lastname}
          />
          <Typography variant="p" color="red">{errors.lastname?.message}</Typography>
          {showHide === "showCompany" ?
            <TextField style={{ backgroundColor: "white", marginBottom: ".5rem", borderRadius: "10px", width: "70%" }}
                       id="company"
                       label="Company" />
            : ""}

          <TextField style={{ backgroundColor: "white", marginBottom: ".5rem", borderRadius: "10px", width: "70%" }}
                     required
                     id="email"
                     name="email"
                     label="Email"
                     {...register("email")}
                     error={!!errors.email}
          />
          <Typography variant="p" color="red">{errors.email?.message}</Typography>

          <TextField style={{
            backgroundColor: "white",
            marginBottom: ".5rem",
            marginTop: ".5rem",
            borderRadius: "10px",
            width: "400px"
          }}
                     required
                     id="description"
                     name="description"
                     label="Description"
                     {...register("description")}
                     error={!!errors.description}
                     multiline
                     rows={4}
          />
          <Typography variant="p" color="red">{errors.description?.message}</Typography>
          <Button type="submit" onClick={handleSubmit(onSubmit)}
                  style={{ backgroundColor: "#e2b945", color: "white", width: "10rem" }}>Send</Button>
        </Box>

      </div>
    </Box>
  );
};

export default ContactForm;
