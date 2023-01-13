import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Radio } from "@mui/material";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "../../styles/ContactForm.module.css";

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
    emailjs
      .sendForm(
        "service_a62px2m",
        "template_5u6kgik",
        form.current,
        "xBwMCYQyB3YvK0lkv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .required("Firstname is required")
      .min(2, "Firstname must be at least 2 characters"),
    lastname: Yup.string()
      .required("Lastname is required")
      .min(2, "Lastname must be at least 2 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    description: Yup.string()
      .required("Description is required")
      .min(10, "Description must be at lease 10 character"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const descriptionMediaQueries = {
    width: { xs: "15rem", sm: "20rem", md: "23rem" },
  };

  const radioGroup = {
    flexDirection: { xs: "column", lg: "row" },
  };

  return (
    <Box
      className={styles.contactForm}
      component="form"
      ref={form}
      onSubmit={onSubmit}
      noValidate
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <FormControl>
          <RadioGroup
            sx={radioGroup}
            className={styles.radioGroup}
            defaultChecked="showArtist"
          >
            <FormControlLabel
              name="artist"
              value="showArtist"
              checked={showHide === "showArtist"}
              onClick={handleShow}
              control={<Radio />}
              label="l'm an Artist"
            />
            <FormControlLabel
              name="eventplanner"
              value="showCompany"
              checked={showHide === "showCompany"}
              onClick={handleShow}
              control={<Radio />}
              label="l'm an Eventplanner"
            />
            <FormControlLabel
              name="other"
              value="showOther"
              checked={showHide === "showOther"}
              onClick={handleShow}
              control={<Radio />}
              label="Other"
            />
          </RadioGroup>
        </FormControl>

        <Box className={styles.formBox}>
          <TextField
            className={styles.text}
            required
            id="firstname"
            name="firstName"
            label="Firstname"
            {...register("firstname")}
            error={!!errors.firstname}
          />
          <Typography variant="p" color="red">
            {errors.firstname?.message}
          </Typography>
          <TextField
            className={styles.text}
            required
            id="lastname"
            name="lastName"
            label="Lastname"
            {...register("lastname")}
            error={!!errors.lastname}
          />
          <Typography variant="p" color="red">
            {errors.lastname?.message}
          </Typography>
          {showHide === "showCompany" ? (
            <TextField className={styles.text} id="company" label="Company" />
          ) : (
            ""
          )}

          <TextField
            className={styles.text}
            required
            id="email"
            name="email"
            label="Email"
            {...register("email")}
            error={!!errors.email}
          />
          <Typography variant="p" color="red">
            {errors.email?.message}
          </Typography>

          <TextField
            sx={descriptionMediaQueries}
            required
            id="description"
            name="description"
            label="Description"
            {...register("description")}
            error={!!errors.description}
            multiline
            rows={4}
            className={styles.description}
          />
          <Typography variant="p" color="red">
            {errors.description?.message}
          </Typography>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className={styles.btn}
          >
            Send
          </Button>
        </Box>
      </div>
    </Box>
  );
};

export default ContactForm;
