import React from "react";
import { Card } from "antd";
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from "formik";

const DatePicker = (props) => {
  const { label, name, ...rest } = props;
  return (
    <Card style={{ width: 300, marginLeft: "500px", marginTop: "20px" }}>
      <label htmlFor={name}>{label}</label>
      <Field name={name} className="form-control" />
      {({ form, field }) => {
        const { setFieldValue } = form
        const { value } = field
        return (
          <DateView
            id={name}
            {...field}
            {...rest}
            selected={value}
            onChange={(val) => setFieldValue(name, val)}
          />
        );
      }}
      <Field />
      <ErrorMessage name={name} />
    </Card>
  );
};

export default DatePicker;