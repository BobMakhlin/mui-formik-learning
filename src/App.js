import "./App.css";
import { Container, Grid, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "./components/Forms/TextField";
import Select from "./components/Forms/Select";
import DatePicker from "./components/Forms/DatePicker";
import Checkbox from "./components/Forms/Checkbox";
import SubmitButton from "./components/Forms/Button";
import countries from "./data/countries.json";

const TERMS_OF_SERVICE_ERROR_MESSAGE =
  "The terms and conditions must be accepted";

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  country: "UA",
  arrivalDate: "",
  depatureDate: "",
  message: "",
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  arrivalDate: Yup.date()
    .typeError("Please enter a valid date")
    .min(new Date(2023, 5, 5))
    .required("Required"),
  depatureDate: Yup.date()
    .typeError("Please enter a valid date")
    .required("Required"),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .isTrue(TERMS_OF_SERVICE_ERROR_MESSAGE)
    .required(TERMS_OF_SERVICE_ERROR_MESSAGE),
});

function App() {
  return (
    <Container maxWidth="md" sx={{ pb: 4 }}>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, {setSubmitting}) => {
          console.log("sending a request to API...");
          console.log("values:", values);
          setSubmitting(false);
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Your details</Typography>
            </Grid>
            <Grid item xs={6}>
              <Textfield name="firstName" label="First name"></Textfield>
            </Grid>
            <Grid item xs={6}>
              <Textfield name="lastName" label="Last name"></Textfield>
            </Grid>
            <Grid item xs={12}>
              <Textfield name="email" label="E-Mail"></Textfield>
            </Grid>
            <Grid item xs={12}>
              <Textfield name="phone" label="Phone"></Textfield>
            </Grid>

            <Grid item xs={12}>
              <Typography>Address</Typography>
            </Grid>
            <Grid item xs={12}>
              <Textfield name="addressLine1" label="Address Line1"></Textfield>
            </Grid>
            <Grid item xs={12}>
              <Textfield name="addressLine2" label="Address Line2"></Textfield>
            </Grid>
            <Grid item xs={6}>
              <Textfield name="city" label="City"></Textfield>
            </Grid>
            <Grid item xs={6}>
              <Textfield name="state" label="State"></Textfield>
            </Grid>
            <Grid item xs={12}>
              <Select
                name="country"
                label="Country"
                options={countries}
              ></Select>
            </Grid>

            <Grid item xs={12}>
              <Typography>Booking information</Typography>
            </Grid>
            <Grid item xs={6}>
              <DatePicker name="arrivalDate" label="Arrival Date" />
            </Grid>
            <Grid item xs={6}>
              <DatePicker name="depatureDate" label="Depature Date" />
            </Grid>
            <Grid item xs={12}>
              <Textfield
                name="message"
                label="Message"
                multiline
                rows={4}
              ></Textfield>
            </Grid>

            <Grid item xs={12}>
              <Checkbox
                name="termsOfService"
                legend="Terms Of Service"
                label="I agree"
              ></Checkbox>
            </Grid>

            <Grid item xs={12}>
              <SubmitButton>Submit</SubmitButton>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default App;
