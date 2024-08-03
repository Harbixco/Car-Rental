import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Box, Button } from "@mui/material";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required(<div style={{ color: "red" }}>Required</div>),
    description: Yup.string().required(
      <div style={{ color: "red" }}>Required</div>
    ),
  });
  const onSubmit = (values) => console.log("Form data", values);
  return (
    <>
      <Box
        sx={{
          width: 350,
          maxWidth: "100%",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >

          {(formik) => (
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email / Username"
                name="email"
                 style={{fontSize: '23px'}}
              />

              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="email"
                style={{fontSize: '23px'}}
              />

              <Button
                type="submit"
                fullWidth
                style={{
                  height: "50px",
                  marginTop: "30px",
                  marginBottom: "20px",
                  backgroundColor: "#5ea4b1",
                  color: "#ffff",
                }}
              >
                Next
              </Button>

          </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default FormikContainer;