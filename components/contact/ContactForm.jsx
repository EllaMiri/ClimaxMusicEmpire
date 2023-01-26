import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

  //Contact Form on the start page
const ContactForm = () => {
  // States for the information in the contact form
  
  const [showHide, setShowHide] = useState("showArtist");
  const [_, setShowRole] = useState("showArtist");
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [company, setCompany] = useState();
  const [description, setDescription] = useState();

  const [checked, setChecked] = useState(true);

  // Success message when email is sent
  const submitNofify = () => toast.success("Email sent");

  const form = useRef();

  //Reset the form when message is sent
  const handleForm = () => {
    form.current.reset();
  };

  //Show inputs depenting on if you choice artist or eventplanner checkbox
  const handleShow = (e) => {
    const getShow = e.target.value;
    setShowHide(getShow);
    setShowRole(getShow);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // When user clicks submit form:
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
    handleForm();
    submitNofify();
  };

  // Input validation for the form
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
    approve: Yup.bool().oneOf(
      [true],
      "You much accept the the information is being sent to the company"
    ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Media queries
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
      noValidate
    >
      <div
      className={styles.container}
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

          <FormGroup className={styles.formGroup}>
            <FormControl>
              <FormControlLabel
                className={styles.white}
                control={
                  <Checkbox
                    className={styles.white}
                    onChange={handleChange}
                    required
                  />
                }
                label="I accept that this information is being sent to the company for contact purposes."
                id="approve"
                name="approve"
                {...register("approve")}
              />
            </FormControl>
          </FormGroup>
          <Typography variant="p" color="red">
            {errors.approve?.message}
          </Typography>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className={styles.btn}
          >
            Send
          </Button>
          <ToastContainer />
        </Box>
      </div>
    </Box>
  );
};

export default ContactForm;
