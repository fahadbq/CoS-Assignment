import { Field } from "formik";
import { Form } from "react-bootstrap";
import React from "react";

const TextField = ({ label, type, name, placeholder }) => {
  return (
    <div>
      <Form.Label> {label} </Form.Label>
      <Field
        className="form-control"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
