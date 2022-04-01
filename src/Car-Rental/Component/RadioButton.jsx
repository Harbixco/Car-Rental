import React from "react";
import { Field, ErrorMessage } from "formik";
import { Card } from "antd";

const Button = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <Card style={{ width: 300, marginLeft: "500px", marginTop: "20px" }}>
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        {...rest}
      >
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor="option.value">{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} />
    </Card>
  );
};

export default Button;
