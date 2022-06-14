import { Field } from "formik";
import { Form } from "react-bootstrap";
import React from "react";

const TextField = ({ label, type, name, placeholder, errors, touched }) => {
  return (
    <div>
      <Form.Label> {label} </Form.Label>
      <Field
        className={`form-control ${errors && touched ? `is-invalid` : null}`}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {touched && errors ? <span className="error">{errors}</span> : null}
    </div>
  );
};

export default TextField;
