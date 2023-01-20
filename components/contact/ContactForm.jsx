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
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [description, setDescription] = useState();

  const form = useRef();

  const handleForm = () => {
   form.current.reset()


  }

  const handleShow = (e) => {
    const getShow = e.target.value;
    setShowHide(getShow);
    setShowRole(getShow);
  };

  const onSubmit = () => {
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleForm()
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
      // onSubmit={e => handleForm(e)}
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
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
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
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
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
            <TextField
              className={styles.text}
              id="company"
              label="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          ) : (
            ""
          )}

          <TextField
            className={styles.text}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
