import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, NavLink } from "react-bootstrap";
import { getAllClients, asyncAllClients } from "./clientsSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

import AddForm from "./AddForm";

const ClientsContainer = (props) => {
  const [page, setPage] = useState(0);

  const clients = useSelector(getAllClients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncAllClients(page));
  }, [dispatch, page]);

  const fetchMoreData = () => {
    if (clients.hasNext) {
      setPage(page + 1);
    }
  };

  return (
    <div className="nav__container">
      <ListGroup className="nav__scroll">
        <InfiniteScroll
          dataLength={clients.data.length}
          next={fetchMoreData}
          hasMore={clients.hasNext}
          loader={<p style={{ textAlign: "center" }}>Loading...</p>}
          endMessage={<p style={{ textAlign: "center" }}> End of data </p>}
        >
          {clients.data.map((client) => {
            return (
              <ListGroup.Item key={client.id}>
                <NavLink as={Link} to={`${client.id}`}>
                  {client?.firstName}
                  {client?.lastName}
                </NavLink>
              </ListGroup.Item>
            );
          })}
        </InfiniteScroll>
      </ListGroup>

      <AddForm />
    </div>
  );
};

export default ClientsContainer;
