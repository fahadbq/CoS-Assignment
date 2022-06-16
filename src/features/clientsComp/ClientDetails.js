import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllClients } from "../clientsComp/ClientsSlice";
import { asyncGetClient } from "../clientsComp/ClientsSlice";

import ClientForm from "../clientsComp/ClientForm";

const ClientDetails = ({
  formSubmission,
  toggleEdit,
  handleToggleEdit,
  removeClient,
  updateButton,
  deleteButton,
}) => {
  const { clientId } = useParams();

  const dispatch = useDispatch();

  const clients = useSelector(getAllClients);

  useEffect(() => {
    dispatch(asyncGetClient(clientId));
  }, [dispatch, clientId]);

  return (
    <div className="nav__component">
      <h1> Client Details </h1>

      <ClientForm
        oneData={clients.oneData}
        formSubmission={formSubmission}
        toggleEdit={toggleEdit}
        handleToggleEdit={handleToggleEdit}
        removeClient={removeClient}
        updateButton={updateButton}
        deleteButton={deleteButton}
      />
    </div>
  );
};

export default ClientDetails;
