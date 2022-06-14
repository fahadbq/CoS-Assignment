import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { Routes, Route, useNavigate } from "react-router-dom";

// Components
import Login from "./features/login/Login";
import AdminsContainer from "./features/admins/AdminsContainer";
import AdminDetails from "./features/admins/AdminForm";

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
        <Container>
          <Nav className="nav__links">
            {userLoggedIn ? (
              <>
                <NavLink href="/admins"> Admins </NavLink>
                <NavLink onClick={handleLogout}> Logout </NavLink>
              </>
            ) : (
              <>
                <NavLink href="/"> Sign In </NavLink>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>

      {/* Route session */}
      <Routes>
        <Route path="/" element={<Login handleAuth={handleAuth} />} />
        <Route path="/admins" element={<AdminsContainer />} />
        <Route path="/admins/:adminId" element={<AdminDetails />} />
      </Routes>
    </div>
  );
};

export default NavBar;
