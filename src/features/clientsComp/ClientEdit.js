import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncDeleteClient } from "../clientsComp/ClientsSlice";

import ClientDetails from "./ClientDetails";

const EditClient = (props) => {
  const [toggleEdit, SetToggleEdit] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggleEdit = () => {
    SetToggleEdit(!toggleEdit);
  };

  //Async Update Operation
  const formSubmission = (formData) => {
    console.log(formData);
  };

  //Async Delete Operation
  const removeClient = (id) => {
    const deleteValues = {
      id,
      navigate,
    };

    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      dispatch(asyncDeleteClient(deleteValues));
    }
  };

  return (
    <div>
      <ClientDetails
        formSubmission={formSubmission}
        toggleEdit={toggleEdit}
        handleToggleEdit={handleToggleEdit}
        removeClient={removeClient}
      />
    </div>
  );
};

export default EditClient;
