import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

// Components
import Login from "./features/login/Login";
import PrivateRoute from "./features/privateRoute/PrivateRoute";
import AdminsList from "./features/admins/AdminsList";
import AdminEdit from "./features/admins/AdminEdit";

import ClientsList from "./features/clients/ClientsList";
import ClientEdit from "./features/clients/ClientEdit";

const NavBar = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleAuth = () => {
    return setUserLoggedIn(true);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUserLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    const confirm = window.confirm("are you sure");
    if (confirm) {
      localStorage.removeItem("token");
      handleAuth();
      navigate("/");
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="flex-grow-1">
          <Nav className="nav__links">
            {userLoggedIn && localStorage.getItem("token") ? (
              <>
                <Nav.Link as={Link} to="/admins">
                  Admins
                </Nav.Link>
                <Nav.Link as={Link} to="/clients" className="nav__positioning">
                  Clients
                </Nav.Link>
                <Nav.Link onClick={handleLogout} className="nav__positioning">
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/">
                  Sign In
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* Route session */}
      <Routes>
        <Route path="/" element={<Login handleAuth={handleAuth} />} />

        {/* Private Route */}
        <Route element={<PrivateRoute />}>
          <Route path="/admins" element={<AdminsList />} />
          <Route path="/admins/:adminId" element={<AdminEdit />} />

          <Route path="/clients" element={<ClientsList />} />
          <Route path="/clients/:clientId" element={<ClientEdit />} />
        </Route>
      </Routes>
    </div>
  );
};

export default NavBar;
