
import React from 'react'
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'

import Login from './features/login/Login'

const NavBar = (props) => {
  return (
    <div >
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <NavLink to="/" > Sign In </NavLink>
          </Nav>
        </Container>
      </Navbar>

      {/* Route session */}
      <Routes >
        <Route path="/" element={<Login />} /> 
      </Routes>
    </div>
  )
}

export default NavBar