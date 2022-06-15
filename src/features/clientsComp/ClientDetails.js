import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllClients } from "../clientsComp/ClientsSlice";
import { asyncGetClient } from "../clientsComp/ClientsSlice";

import ClientForm from "../clientsComp/ClientForm";

const ClientDetails = ({
  formSubmission,
  toggleEdit,
  handleToggleEdit,
  removeClient,
}) => {
  const { clientId } = useParams();

  const dispatch = useDispatch();

  const clients = useSelector(getAllClients);

  useEffect(() => {
    dispatch(asyncGetClient(clientId));
  }, [dispatch, clients]);

  return (
    <div className="nav__component">
      <h1> Client Details </h1>

      <ClientForm />

      {/* <Button type="submit" className="mt-3 btn-success">
        {toggleEdit ? "Submit" : "Save"}
      </Button>

      <Button
        onClick={handleToggleEdit}
        className="mt-3"
        variant="warning"
        style={{ marginLeft: "900px" }}
      >
        {toggleEdit ? "Edit" : "Cancel"}
      </Button>

      <Button
        onClick={() => {
          removeClient(clientId);
        }}
        className="mt-3"
        variant="danger"
        style={{ marginLeft: "20px" }}
      >
        Delete
      </Button> */}
    </div>
  );
};

export default ClientDetails;
