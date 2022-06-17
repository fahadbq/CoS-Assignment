import React from "react";
import { asyncCreateClient } from "./ClientsSlice";
import { useDispatch } from "react-redux";
import ClientFrom from "./ClientForm";

const AddForm = (props) => {
  const dispatch = useDispatch();

  const formSubmission = (values) => {
    console.log(values);
    dispatch(asyncCreateClient(values));
  };

  return (
    <div className="nav__form">
      <h2>Create a client</h2>
      <ClientFrom formSubmission={formSubmission} />
    </div>
  );
};

export default AddForm;
