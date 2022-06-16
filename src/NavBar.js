import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

// Components
import Login from "./features/login/Login";
import PrivateRoute from "./features/privateRoute/PrivateRoute";
import AdminsContainer from "./features/admins/AdminsList";
import EditAdmin from "./features/admins/EditAdmin";

import ClientsContainer from "./features/clientsComp/ClientsList";
import EditClient from "./features/clientsComp/ClientEdit";

const NavBar = ({ userLoggedIn, handleAuth }) => {
  const navigate = useNavigate();

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
            {userLoggedIn ? (
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
        <Route
          path="/admins"
          element={<PrivateRoute component={AdminsContainer} />}
        />
        <Route
          path="/admins/:adminId"
          element={<PrivateRoute component={EditAdmin} />}
        />
        <Route
          path="/clients"
          element={<PrivateRoute component={ClientsContainer} />}
        />
        <Route
          path="/clients/:clientId"
          element={<PrivateRoute component={EditClient} />}
        />
      </Routes>
    </div>
  );
};

export default NavBar;
