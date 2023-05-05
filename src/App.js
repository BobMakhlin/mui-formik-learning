import "./App.css";
import { Container, Grid, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Textfield from "./components/Forms/TextField";
import Select from "./components/Forms/Select";
import DatePicker from "./components/Forms/DatePicker";
import countries from "./data/countries.json";

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
    .min(new Date(2023, 5, 5))
    .required("Required"),
  depatureDate: Yup.date().required("Required"),
});

function App() {
  return (
    <Container maxWidth="md" sx={{ pb: 4 }}>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log("values:", values);
        }}
        validateOnBlur
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
              <DatePicker name="arrivalDate" />
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default App;
