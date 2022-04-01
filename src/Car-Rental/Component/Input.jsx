import React from "react";
import { Field, ErrorMessage } from "formik";
import { Card } from "antd";

const Input = (props) => {
  const { label, name, ...rest } = props;

  return (
    <Card style={{ width: 350,height: '70px', marginTop: "20px" }}>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} className="form-control" />
      <ErrorMessage name={name} />
    </Card>
  );
};

export default Input;
