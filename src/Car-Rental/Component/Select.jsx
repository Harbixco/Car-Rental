import React from "react";
import { Field, ErrorMessage } from "formik";
import { Card } from "antd";

const Input = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <Card style={{ width: 300, marginLeft: "500px", marginTop: "20px" }}>
      <label htmlFor={name}>{label}</label>
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        className="form-control"
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} />
    </Card>
  );
};

export default Input;
