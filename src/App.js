import "./App.css";
import { Container, Grid, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const INITIAL_FORM_STATE = {};

const FORM_VALIDATION = Yup.object().shape({});

function App() {
  return (
    <Container maxWidth="md">
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values) => {
          console.log("values:", values);
        }}
      >
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Your details</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Address</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Booking information</Typography>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
}

export default App;
