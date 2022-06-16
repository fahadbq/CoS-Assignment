import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { getAllClients } from "./ClientsSlice";
import { Link } from "react-router-dom";

import AddForm from "./AddForm";

const ClientsContainer = (props) => {
  const clients = useSelector(getAllClients);

  return (
    <div className="nav__container">
      <ListGroup className="nav__scroll">
        {clients.loading === false &&
          clients.data.map((client) => {
            return (
              <ListGroup.Item key={client.id}>
                <Link to={`/clients/${client.id}`}>
                  {client?.firstName}
                  {client?.lastName}
                </Link>
              </ListGroup.Item>
            );
          })}
      </ListGroup>

      <AddForm />
    </div>
  );
};

export default ClientsContainer;
