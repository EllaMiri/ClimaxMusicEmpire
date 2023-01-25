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

const ContactForm = () => {
  const [showHide, setShowHide] = useState("showArtist");
  const [_, setShowRole] = useState("showArtist");
  const [checked, setChecked] = useState(true);

  const submitNofify = () => toast.success("Email sent");

  const form = useRef();

  const handleShow = (e) => {
    const getShow = e.target.value;
    setShowHide(getShow);
    setShowRole(getShow);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
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
    submitNofify();
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

          <FormGroup>
            <FormControl>
              <FormControlLabel
                style={{ color: "white" }}
                control={
                  <Checkbox
                    style={{ color: "white" }}
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
