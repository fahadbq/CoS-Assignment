import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import { getAllAdmins } from "./AdminsSlice";
import { Link } from "react-router-dom";

import AdminDetails from "../admins/AdminDetails";

const AdminsContainer = (props) => {
  const admins = useSelector(getAllAdmins);

  console.log(admins);

  return (
    <div className="nav__container">
      <ListGroup style={{ postion: "relative", width: "220px" }}>
        {admins.loading === false &&
          admins.data.data.map((admin) => {
            return (
              <ListGroup.Item key={admin.id}>
                {" "}
                <Link to={`/admins/${admin.id}`}> {admin.firstName} </Link>{" "}
              </ListGroup.Item>
            );
          })}
      </ListGroup>
      <AdminDetails />
    </div>
  );
};

export default AdminsContainer;
