
import React from 'react'
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'

// Components
import Login from './features/login/Login'
import AccountContainer from './features/account/AccountContainer'

const NavBar = (props) => {
  return (
    <div >
      <Navbar bg="dark" variant="dark" className="nav__links" >
        <Container>
          <Nav>
            <NavLink to="/" > Sign In </NavLink>
            <NavLink to="/account"> Account </NavLink>
          </Nav>
        </Container>
      </Navbar>

      {/* Route session */}
      <Routes >
        <Route path="/" element={<Login />} /> 
        <Route path="/account" element={<AccountContainer />} /> 
      </Routes>
    </div>
  )
}

export default NavBar