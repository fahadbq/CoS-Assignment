import { Field } from "formik";
import React from "react";

const TextField = ({
  label,
  type,
  name,
  placeholder,
  errors,
  touched,
  toggle_edit,
}) => {
  return (
    <div>
      <label className="from-group"> {label} </label>
      <Field
        className={`form-control ${errors && touched ? `is-invalid` : null}`}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={toggle_edit}
      />
      {touched && errors ? <span className="error">{errors}</span> : false}
    </div>
  );
};

export default TextField;
