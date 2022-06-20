import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, NavLink } from "react-bootstrap";
import { getAllAdmins, asyncAllAdmins } from "./adminsSlice";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import AdminForm from "./AdminForm";

const AdminsContainer = (props) => {
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  const admins = useSelector(getAllAdmins);

  useEffect(() => {
    dispatch(asyncAllAdmins(page));
  }, [dispatch, page]);

  const fetchMoreData = () => {
    if (admins.hasNext) {
      console.log(admins.hasNext);
      setPage(page + 1);
    }
  };

  return (
    <div className="nav__container">
      <ListGroup className="nav__scroll">
        <InfiniteScroll
          dataLength={admins.data.length}
          next={fetchMoreData}
          hasMore={admins.hasNext}
          loader={<p style={{ textAlign: "center" }}>Loading...</p>}
          endMessage={<p style={{ textAlign: "center" }}> End of data </p>}
        >
          {admins.data.map((admin) => {
            return (
              <ListGroup.Item key={admin.id}>
                <NavLink as={Link} to={`${admin.id}`} variant="info">
                  {admin?.firstName}
                  {admin?.lastName}
                </NavLink>
              </ListGroup.Item>
            );
          })}
        </InfiniteScroll>
      </ListGroup>

      <AdminForm />
    </div>
  );
};

export default AdminsContainer;
