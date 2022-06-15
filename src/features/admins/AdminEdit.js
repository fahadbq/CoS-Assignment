import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAsyncAdmin } from "../admins/AdminsSlice";

import AdminDetails from "./AdminDetails";

const AdminEdit = (props) => {
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
  const removeAdmin = (id) => {
    const deleteValues = {
      id,
      navigate,
    };

    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      dispatch(deleteAsyncAdmin(deleteValues));
    }
  };

  return (
    <div>
      <AdminDetails
        formSubmission={formSubmission}
        toggleEdit={toggleEdit}
        handleToggleEdit={handleToggleEdit}
        removeAdmin={removeAdmin}
      />
    </div>
  );
};

export default AdminEdit;
