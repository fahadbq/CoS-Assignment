import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { getAllAdmins } from "./AdminsSlice";
import { Link } from "react-router-dom";

import AdminForm from "./AdminForm";

const AdminsContainer = (props) => {
  const admins = useSelector(getAllAdmins);

  return (
    <div className="nav__container">
      <ListGroup className="nav__scroll">
        {admins.loading === false &&
          admins.data.map((admin) => {
            return (
              <ListGroup.Item key={admin.id}>
                <Link to={`/admins/${admin.id}`}>
                  {admin?.firstName}
                  {admin?.lastName}
                </Link>
              </ListGroup.Item>
            );
          })}
      </ListGroup>

      <AdminForm />
    </div>
  );
};

export default AdminsContainer;
