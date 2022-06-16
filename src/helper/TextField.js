import { Field } from "formik";
import React from "react";

const TextField = ({
  label,
  type,
  name,
  placeholder,
  errors,
  touched,
  editToggle,
}) => {
  return (
    <div>
      <label className="from-group"> {label} </label>
      <Field
        className={`form-control ${errors && touched ? `is-invalid` : null}`}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={editToggle}
      />
      {touched && errors ? <span className="error">{errors}</span> : false}
    </div>
  );
};

export default TextField;
